// Copia o app web da Lunora (pasta ../lunora) para www/, que é o que vai dentro do app de iPhone.
import { cpSync, mkdirSync, rmSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, "..", "..", "lunora"), out = join(here, "..", "www");
rmSync(out, { recursive: true, force: true }); mkdirSync(out, { recursive: true });
for (const f of ["index.html", "config.js", "manifest.webmanifest", "icon-192.png", "icon-512.png", "icon-180.png", "icon-maskable-512.png"]) {
  if (existsSync(join(src, f))) cpSync(join(src, f), join(out, f));
}
cpSync(join(here, "..", "native", "lunora-native.js"), join(out, "lunora-native.js"));
// no app nativo: sem service worker, e com a ponte nativa (notificações, vibração, barra de status)
let html = readFileSync(join(out, "index.html"), "utf8");
html = html.replace('<script src="./config.js"></script>', '<script src="./config.js"></script>\n  <script src="./lunora-native.js"></script>');
writeFileSync(join(out, "index.html"), html);
console.log("www pronto:", out);
