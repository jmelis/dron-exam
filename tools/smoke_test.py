"""Prueba de humo de la app en un navegador real (Chrome headless + Playwright).

Uso:  python3 tools/smoke_test.py [--shots carpeta]
Requiere: pip install playwright  y Chrome o Chromium instalado.

Comprueba lo esencial, sobre todo que el progreso NO se pierde:
  1. La portada carga sin errores de consola.
  2. Se puede completar una ronda con todos los formatos de pregunta.
  3. El progreso sobrevive a recargar la página.
  4. Si se borra localStorage, se recupera desde IndexedDB.
  5. Un progreso guardado por una versión futura (schema mayor) se abre en solo lectura y no se pisa.
  6. Importar una copia guarda antes una copia del progreso actual.
  7. El simulacro se puede entregar y muestra el resultado.
"""
import argparse, contextlib, functools, http.server, json, os, pathlib, shutil, socketserver, sys, threading

from playwright.sync_api import sync_playwright

ROOT = pathlib.Path(__file__).resolve().parent.parent
KEY = "dron-exam:state"


def serve():
    class Quiet(http.server.SimpleHTTPRequestHandler):
        def log_message(self, *a):
            pass
    handler = functools.partial(Quiet, directory=str(ROOT))
    httpd = socketserver.TCPServer(("127.0.0.1", 0), handler)
    threading.Thread(target=httpd.serve_forever, daemon=True).start()
    return httpd, "http://127.0.0.1:%d/" % httpd.server_address[1]


def chrome_path():
    for p in ("/usr/bin/google-chrome", "/usr/bin/chromium", "/usr/bin/chromium-browser"):
        if os.path.exists(p):
            return p
    return None


def answer_round(page, shots, max_steps=400):
    """Contesta una ronda entera eligiendo siempre la primera opción disponible."""
    seen_wrong = seen_conf = False
    for step in range(max_steps):
        if step == 0 and shots:
            page.screenshot(path=str(shots / "02-pregunta.png"))
        if page.locator("text=Ronda terminada").count():
            return seen_wrong, seen_conf
        if page.locator("[data-a=sure]").count():
            if not seen_conf and shots:
                page.screenshot(path=str(shots / "03-confianza.png"))
            seen_conf = True
            page.click("[data-a=sure]")
            continue
        if page.locator("[data-a=next]").count():
            if page.locator(".expl").count() and not seen_wrong and shots:
                page.screenshot(path=str(shots / "04-fallo.png"))
            seen_wrong = seen_wrong or page.locator(".expl").count() > 0
            page.click("[data-a=next]")
            continue
        if page.locator("[data-a=pick]:not([disabled])").count():
            page.locator("[data-a=pick]:not([disabled])").first.click()
            continue
        if page.locator("[data-a=tf]:not([disabled])").count():
            page.locator("[data-a=tf]").first.click()
            continue
        if page.locator("[data-a=place]").count():
            page.locator("[data-a=place]").first.click()
            continue
        if page.locator("[data-a=checkOrder]").count():
            page.click("[data-a=checkOrder]")
            continue
        if page.locator("[data-a=match]").count():
            page.locator("[data-a=match]").first.click()
            continue
        if page.locator("[data-a=checkMatch]").count():
            page.click("[data-a=checkMatch]")
            continue
        raise AssertionError("Estado inesperado en la ronda (paso %d)" % step)
    raise AssertionError("La ronda no terminó")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--shots", default=None, help="carpeta para guardar capturas")
    args = ap.parse_args()
    shots = pathlib.Path(args.shots) if args.shots else None
    if shots:
        shots.mkdir(parents=True, exist_ok=True)

    httpd, url = serve()
    errors = []
    with sync_playwright() as p:
        browser = p.chromium.launch(executable_path=chrome_path(), args=["--no-sandbox"])
        ctx = browser.new_context(viewport={"width": 1180, "height": 820}, device_scale_factor=1, locale="es-ES")
        page = ctx.new_page()
        # Las fuentes de Google se bloquean en la prueba: sus fallos de carga no cuentan.
        page.on("console", lambda m: errors.append(m.text) if m.type == "error" and "ERR_FAILED" not in m.text else None)
        page.on("pageerror", lambda e: errors.append(str(e)))
        page.on("dialog", lambda d: d.accept())
        page.route("**/fonts.googleapis.com/**", lambda r: r.abort())
        page.route("**/fonts.gstatic.com/**", lambda r: r.abort())

        page.goto(url)
        page.wait_for_selector("text=Siguiente ronda")
        if shots:
            page.screenshot(path=str(shots / "01-inicio.png"))

        # 2. Una ronda con todos los formatos: forzamos una ronda larga con los temas que tienen order/match.
        page.click("[data-a=len][data-v='20']")
        page.click("[data-a=start]")
        answer_round(page, shots)
        if shots:
            page.screenshot(path=str(shots / "05-fin-ronda.png"))
        st = page.evaluate("JSON.parse(localStorage.getItem('%s'))" % KEY)
        assert st["ronda"] == 1, st["ronda"]
        assert len(st["q"]) >= 18, len(st["q"])

        # Formatos especiales: ronda del tema 15 (tiene ordenar y emparejar) y del 8.
        for topic in ("15", "8", "9"):
            page.click("[data-a=home]")
            page.click("[data-a=topic][data-v='%s']" % topic)
            answer_round(page, None)

        # 3. Recargar conserva el progreso
        page.reload()
        page.wait_for_selector("text=Siguiente ronda")
        st2 = page.evaluate("JSON.parse(localStorage.getItem('%s'))" % KEY)
        assert st2["ronda"] == 4, st2["ronda"]

        # 4. Borrar localStorage -> se recupera de IndexedDB
        page.evaluate("localStorage.removeItem('%s')" % KEY)
        page.reload()
        page.wait_for_selector("text=Siguiente ronda")
        st3 = page.evaluate("JSON.parse(localStorage.getItem('%s'))" % KEY)
        assert st3 and st3["ronda"] == 4, "no se recuperó de IndexedDB"

        # 4b. Dos pestañas: lo que se responde en una no se pierde cuando la otra guarda
        other = ctx.new_page()
        other.on("dialog", lambda d: d.accept())
        other.route("**/fonts.googleapis.com/**", lambda r: r.abort())
        other.goto(url)
        other.wait_for_selector("text=Siguiente ronda")
        before = len(st3["q"])
        other.click("[data-a=mode][data-v='nuevas']")
        other.click("[data-a=len][data-v='6']")
        other.click("[data-a=start]")
        answer_round(other, None)
        in_other = len(other.evaluate("JSON.parse(localStorage.getItem('%s'))" % KEY)["q"])
        assert in_other > before, (in_other, before)
        other.close()
        page.click("[data-a=mode][data-v='repaso']")  # la pestaña vieja guarda
        merged = page.evaluate("JSON.parse(localStorage.getItem('%s'))" % KEY)
        assert len(merged["q"]) == in_other and merged["ronda"] == 5, (len(merged["q"]), in_other, merged["ronda"])
        st3 = merged

        # 6. Importar una copia: guarda antes el progreso actual
        backup_txt = json.dumps({"app": "dron-exam", "state": st3})
        page.click("[data-a=progress]")
        page.wait_for_selector("text=Copia de seguridad")
        if shots:
            page.screenshot(path=str(shots / "06-progreso.png"), full_page=True)
        page.fill("#codebox", backup_txt)
        page.click("[data-a=paste]")
        page.wait_for_selector("text=Siguiente ronda")
        keys = page.evaluate("Object.keys(localStorage)")
        assert any(k.startswith("dron-exam:backup:before-import") for k in keys), keys

        # 7. Simulacro
        page.click("[data-a=sim]")
        page.wait_for_selector("#timer")
        for i in range(5):
            page.locator("[data-a=simPick]").first.click()
            page.click("[data-a=simNext]")
        if shots:
            page.screenshot(path=str(shots / "07-simulacro.png"))
        page.click("[data-a=simSubmit]")
        page.wait_for_selector("text=Resultado del simulacro")
        if shots:
            page.screenshot(path=str(shots / "08-resultado.png"))
        st4 = page.evaluate("JSON.parse(localStorage.getItem('%s'))" % KEY)
        assert len(st4["sims"]) == 1 and st4["ronda"] == 6, (len(st4["sims"]), st4["ronda"])

        # Chuleta
        page.click("[data-a=home]")
        page.click("[data-a=cifras]")
        page.wait_for_selector("text=Chuleta de cifras")
        if shots:
            page.screenshot(path=str(shots / "09-cifras.png"), full_page=True)

        # 5. Progreso de una versión futura: solo lectura y no se pisa
        future = dict(st4); future["schema"] = 99; future["ronda"] = 777
        page.evaluate("s => { localStorage.setItem('%s', JSON.stringify(s)); }" % KEY, future)
        page.evaluate("""() => new Promise(r => { const q = indexedDB.open('dron-exam', 1);
            q.onsuccess = () => { const tx = q.result.transaction('kv','readwrite'); tx.objectStore('kv').delete('state'); tx.oncomplete = r; }; })""")
        page.reload()
        page.wait_for_selector("text=versión más nueva")
        page.click("[data-a=mode][data-v='nuevas']")
        st5 = page.evaluate("JSON.parse(localStorage.getItem('%s'))" % KEY)
        assert st5["schema"] == 99 and st5["ronda"] == 777, "se pisó un progreso de versión futura"
        page.evaluate("s => localStorage.setItem('%s', JSON.stringify(s))" % KEY, st4)

        # Móvil y modo oscuro
        mob = browser.new_context(viewport={"width": 390, "height": 844}, device_scale_factor=2, locale="es-ES", color_scheme="dark")
        mp = mob.new_page()
        mp.on("pageerror", lambda e: errors.append(str(e)))
        mp.route("**/fonts.googleapis.com/**", lambda r: r.abort())
        mp.goto(url)
        mp.wait_for_selector("text=Siguiente ronda")
        if shots:
            mp.screenshot(path=str(shots / "10-movil-oscuro-inicio.png"))
        mp.click("[data-a=start]")
        mp.locator("[data-a=pick], [data-a=tf], [data-a=place], [data-a=match]").first.wait_for()
        if shots:
            mp.screenshot(path=str(shots / "11-movil-oscuro-pregunta.png"), full_page=True)
        browser.close()
    httpd.shutdown()

    if errors:
        print("ERRORES DE CONSOLA:\n" + "\n".join(errors))
        sys.exit(1)
    print("OK: todas las comprobaciones pasaron")


if __name__ == "__main__":
    main()
