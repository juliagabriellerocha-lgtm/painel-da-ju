# Como atualizar (para o Claude em conversas novas)

Dois produtos, um repositório:

| | Lunora da Ju (dados da Ju) | Lunora (venda) |
|---|---|---|
| App no celular | `index.html` na raiz (GitHub Pages) | pasta `lunora/` (`lunora/demo.html` = demonstração) |
| Artefato Claude | https://claude.ai/artifact/CtCUaBGhLuzxFUgsPeuXRe (banco: app/state, financas/espelho, direcao/<data>) | https://claude.ai/artifact/J2fMnZjZhkcUZgRyndRSsG (demonstração, página `demo.html`) |
| Código-fonte | `src/shell.js` + `src/shell.css` | gerado por `lunora/make_lunora.py` a partir do `index.html` da raiz (que já traz os recursos inteligentes) + `lunora/lunora_extra.js`, `lunora.css`, `demo.js` |

## Lunora da Ju
1. Copie o repositório para `/home/claude/painel-da-ju` e `tools/artefato/*` para `/home/claude/build/` (os scripts usam esses caminhos).
2. Edite `src/shell.js` / `src/shell.css`.
3. `bash /home/claude/build/build.sh` → atualiza `index.html` (app) e `/home/claude/build/index.html` (artefato).
4. Suba o número em `CACHE_NAME` no `service-worker.js`, commit e push.
5. Publique o artefato com a ferramenta Artifact: `url` do artefato + `file_path=/home/claude/build/index.html`.

## Lunora (venda)
1. Copie `lunora/` para `/home/claude/lunora`.
2. Edite `lunora_extra.js`, `lunora_smart.js` ou `lunora.css` (ou as substituições em `make_lunora.py`).
3. `python3 /home/claude/lunora/make_lunora.py` → gera `index.html` e `demo.html` sem nenhum dado pessoal (o script para se achar nomes/dados da Ju).
4. Copie de volta para `lunora/`, commit e push; publique `demo.html` no artefato de demonstração (com os arquivos config.js, demo.js, manifest e ícones).

## Regra
- Recurso novo da Lunora também vai para a Lunora da Ju (ver `tools/artefato/apply_smart.py` como exemplo).
- Dados da Ju nunca entram na Lunora de venda.
- `lunora/config.js` recebe a URL e a chave anon do Supabase da Lunora quando o projeto existir.

## Login (Supabase)
- Projeto Supabase `lunora` (jualytusqwobztvvpkgw, São Paulo) serve os dois apps: tabelas painel_state e painel_direcao (cada pessoa só vê as próprias linhas) e lunora_assinaturas.
- A URL e a chave publicável ficam em `SB_DEFAULT` no `index.html` da raiz e em `lunora/config.js`.
- Os dois apps têm Entrar, Criar conta e Esqueci a senha.
