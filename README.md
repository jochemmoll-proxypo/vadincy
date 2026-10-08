# Vadincy

Nederlandstalige website voor de zelfstandige praktijk van Jochem Moll. Gebouwd met HTML, CSS en JavaScript, met Vite als ontwikkelserver en buildtool. Node.js 22.12+ of 24 vereist.

## Ontwikkeling

```sh
npm ci
npm run dev -- --port 5173
```

## Productiebuild

```sh
npm run build
npm run preview -- --port 4173
```

De productie-output staat in `dist/`. Er is geen backend of formulierverwerking; de contactknop opent een e-mailprogramma.

De productiebuild voegt CSS en JavaScript direct in `index.html` in via `vite.config.js`. Daardoor is de pagina niet afhankelijk van aparte `/assets/`-requests, die tijdens de overgang naar Cloudflare nog bij de oude hosting kunnen uitkomen. De ontwikkelserver gebruikt de losse bronbestanden.

## Cloudflare Workers

Deze repository bevat `wrangler.jsonc` voor een Worker met statische assets. De workernaam is `vadincy` en de bestanden worden vanuit `dist/` gepubliceerd. Wrangler voert zelf `npm run build` uit vóór deployment.

Gebruik in Cloudflare Workers Builds de branch `main`, de repositoryroot als root directory en `npm run deploy` als deploy command. Een apart build command is niet nodig: de Wrangler-configuratie verzorgt de build. Als de gekoppelde Worker anders heet, moet de naam in de Cloudflare-instellingen overeenkomen met `vadincy` in `wrangler.jsonc`.

Het custom domain `vadincy.nl` wordt in Cloudflare beheerd. Een geslaagde Git-push is nog geen bewijs van een geslaagde Cloudflare-build of werkende DNS.

## Nog bevestigen voor publicatie

- Contactadres: `jochem.moll@gmail.com` (bevestigd door Jochem).
- De dienstbeschrijvingen en aanpak zijn door Jochem akkoord bevonden voor deze versie.
- Cases zijn gebaseerd op de door Jochem aangeleverde werkervaring; er zijn geen extra prestatieclaims toegevoegd.
- LinkedIn-profiel is toegevoegd. Voeg eventueel een portret en bedrijfsgegevens toe.
- Google Fonts is optioneel; bij geen netwerktoegang gebruikt de website Arial.

Er zijn geen klantnamen, testimonials of behaalde resultaten verzonnen.

## Portfolio-logo's

RDC en ChargePoint zijn lokaal opgenomen. Externe logo's moeten eerst worden gedownload en lokaal worden opgenomen; gebruik geen hotlinks. LeasePlan toont voorlopig de bedrijfsnaam totdat lokale bestanden beschikbaar zijn.
