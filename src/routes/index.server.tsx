import {
  ShopifyAnalyticsConstants,
  useServerAnalytics,
  Seo,
} from '@shopify/hydrogen';
import {useAtama} from '@atamaco/hydrogen';

import {Layout} from '~/components/index.server';
import {fetcher, Render} from '~/lib/atama.server';
import {Suspense} from 'react';
import {AtamaFetcherConfig} from '@atamaco/fetcher-atama';

export default function Homepage() {
  useServerAnalytics({
    shopify: {
      pageType: ShopifyAnalyticsConstants.pageType.home,
    },
  });

  const data = useAtama<
    {
      seoTitle: string;
      seoDescription: string;
    },
    AtamaFetcherConfig
  >(fetcher, 'index');

  return (
    <Layout>
      <Suspense>
        <Seo
          type="homepage"
          data={{
            title: data?.meta?.seoTitle as string,
            description: data?.meta?.seoDescription as string,
            titleTemplate: '%s',
          }}
        />
      </Suspense>
      {/* @ts-ignore */}
      <Render data={data} />
    </Layout>
  );
}
