import {defineConfig, CookieSessionStorage} from '@shopify/hydrogen/config';
import {getConfigValue} from '~/lib/configuration';

export default defineConfig({
  shopify: {
    defaultCountryCode: 'US',
    defaultLanguageCode: 'EN',
    storeDomain:
      getConfigValue('PUBLIC_STORE_DOMAIN') || 'hydrogen-preview.myshopify.com',
    storefrontToken:
      getConfigValue('PUBLIC_STOREFRONT_API_TOKEN') ||
      '3b580e70970c4528da70c98e097c2fa0',
    privateStorefrontToken: getConfigValue('PRIVATE_STOREFRONT_API_TOKEN'),
    storefrontApiVersion: '2022-07',

    storefrontId: getConfigValue('PUBLIC_STOREFRONT_ID'),
  },
  session: CookieSessionStorage('__session', {
    path: '/',
    httpOnly: true,
    secure: getConfigValue('PROD'),
    sameSite: 'Strict',
    maxAge: 60 * 60 * 24 * 30,
  }),
});
