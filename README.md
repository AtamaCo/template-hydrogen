# Hydrogen + Commerce Template for Atama Composer
This is a demo repository showcasing how to integrate Atama Composer into [Hydrogen](https://shopify.dev/custom-storefronts/hydrogen). The repository is based on the [Hydrogen "demo-store-ts" template](https://github.com/shopify/hydrogen/tree/dist/templates/demo-store-ts).

Hydrogen is a React framework and SDK that you can use to build fast and dynamic Shopify custom storefronts. This repository can be deployed to Vercel and Netlify.

[Atama Docs](https://docs.atama.co/docs/composer-studio/developer-guides/guides/remix)

## Getting started

**Requirements:**

- Node.js version 16.14.0 or higher
- Yarn

## Running the dev server

Then `cd` into the new directory and run:

```bash
npm install
npm run dev
```

Remember to update `hydrogen.config.js` with your shop's domain and Storefront API token!

## Building for production

```bash
npm run build
```

## Previewing a production build

To run a local preview of your Hydrogen app in an environment similar to Oxygen, build your Hydrogen app and then run `npm run preview`:

```bash
npm run build
npm run preview
```
