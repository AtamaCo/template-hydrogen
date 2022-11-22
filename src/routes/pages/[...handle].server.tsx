import {
  ShopifyAnalyticsConstants,
  useServerAnalytics,
  HydrogenRouteProps,
  Seo,
} from '@shopify/hydrogen';
import {Suspense} from 'react';

import {Layout} from '~/components/index.server';
import {fetcher, Render} from '~/lib/atama.server';
import {AtamaFetcherConfig} from '@atamaco/fetcher-atama';
import {useAtamaFromRequest} from '@atamaco/hydrogen';

export default function Page({request}: HydrogenRouteProps) {
  const {pathname} = new URL(request.normalizedUrl);
  useServerAnalytics({
    shopify: {
      pageType: ShopifyAnalyticsConstants.pageType.page,
      resourceId: pathname,
    },
  });

  const data = useAtamaFromRequest<
    {
      seoTitle: string;
    },
    AtamaFetcherConfig
  >(fetcher, request);

  return (
    <Layout>
      <Suspense>
        <Seo
          type="page"
          data={{
            title: data?.meta?.seoTitle as string,
          }}
        />
      </Suspense>
      {/* @ts-ignore */}
      <Render data={data} />
    </Layout>
  );
}
