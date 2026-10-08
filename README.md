# Painel da Ju

App pessoal da Ju: o que fazer agora, rotina, metas, estudos, finanças e trabalho. Instala no celular como app (ícone, tela cheia, funciona sem internet) e sincroniza pela conta.

## Como os dados ficam guardados

Nenhum dado pessoal fica neste código. Tudo fica no seu projeto Supabase, nas tabelas `painel_state` e `painel_direcao`, protegidas por login. Cada pessoa só vê as próprias linhas. O aparelho guarda uma cópia para abrir rápido e funcionar sem internet; quando a conexão volta, ele sincroniza.

## Configurar (uma vez)

1. No Supabase, abra o **SQL Editor** e rode `supabase/painel.sql`.
2. Em **Authentication → URL Configuration**, adicione o endereço do app (GitHub Pages) em Redirect URLs.
3. Abra o app, toque em **Entrar**, preencha em "Projeto Supabase" a URL do projeto e a chave pública (anon/publishable) e entre com seu e-mail e senha.
4. Primeira vez: use **Restaurar backup** com o arquivo `painel-ju-backup.json` para carregar seus dados na conta.

## Instalar no celular

- **iPhone:** abra o endereço no Safari → Compartilhar → Adicionar à Tela de Início.
- **Android:** abra no Chrome → menu ⋮ → Instalar app.

## Publicação

Cada envio para `main` publica o app no GitHub Pages pelo workflow `.github/workflows/pages.yml`.
