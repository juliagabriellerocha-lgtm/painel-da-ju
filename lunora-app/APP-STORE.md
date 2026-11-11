# Lunora na App Store — passo a passo

O projeto do app de iPhone está nesta pasta (Capacitor 8, iOS). Ele empacota o app web da pasta `lunora/`.
Bundle ID: **br.app.lunora** · Nome: **Lunora** · iOS 15 ou mais novo.

## Recursos nativos já incluídos
- Notificações: 10 min antes de cada bloco do dia e 30 min antes de cada compromisso (próximas 48 h). Aparecem também no Apple Watch.
- Voz: botão de microfone na anotação rápida ("consulta sexta 9h" vira compromisso).
- Calendário: compromissos vão para o Calendário do iPhone; se a conta Google estiver no iPhone e for o calendário padrão, aparecem no Google Agenda.
- Vibração ao terminar o modo foco, ícone e tela de abertura próprios.

## O que a Ju faz (só ela pode)
1. Inscrever-se no Apple Developer Program (developer.apple.com/programs) — US$ 99/ano.
2. Em developer.apple.com → Account → Membership: copiar o **Team ID**.
3. Em appstoreconnect.apple.com → Apps → "+" → Novo app: plataforma iOS, nome **Lunora**, idioma Português (Brasil), Bundle ID **br.app.lunora** (se não aparecer na lista, criar em Certificates, Identifiers & Profiles → Identifiers), SKU `lunora`.
4. App Store Connect → Users and Access → Integrations → App Store Connect API → gerar chave com acesso **App Manager**. Anotar **Issuer ID** e **Key ID** e baixar o arquivo `.p8` (só dá para baixar uma vez).
5. No GitHub do repositório → Settings → Secrets and variables → Actions → New repository secret: `APPLE_TEAM_ID`, `ASC_KEY_ID`, `ASC_ISSUER_ID`, `ASC_KEY_P8` (colar o conteúdo do .p8).

## Depois
- GitHub → Actions → **Lunora iOS → TestFlight** → Run workflow. Em ~20 min o app aparece no TestFlight (app da Apple) para instalar no iPhone.
- Para a loja: prints, descrição, política de privacidade, assinatura dentro do app (compras no app) e envio para análise.

## Atualizar o app de iPhone
`cd lunora-app && npm ci && npm run sync` (copia `lunora/` para `www/` e sincroniza o iOS). O build da nuvem já faz isso sozinho.
