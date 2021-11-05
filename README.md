![biosferaordino](https://user-images.githubusercontent.com/12972543/140554607-37f3bc14-9ef9-4138-8b6b-d5a8398dfd6a.jpg)

[![Netlify Status](https://api.netlify.com/api/v1/badges/ad40f9d5-5df9-4143-96c2-51d95d9cdc2e/deploy-status)](https://app.netlify.com/sites/biosferaordino/deploys)

Web oficial de la Reserva de la Biosfera d'Ordino https://www.biosderaordino.ad

## Desenvolupament

Clonar el repositori i instal·lar les dependències.

```bash
git clone git@github.com:markusand/biosferaordino.git
cd biosferaordino
npm install
```

Crear un fitxer `.env` i crear la variable el token d'Airtable `VITE_AIRTABLE_TOKEN`.

Iniciar el servidor de desenvolupament

```bash
npm run dev
```

## Desplegament

La web es desplega automàticament a Netlify després d'un push a la branca `main` :tada:
