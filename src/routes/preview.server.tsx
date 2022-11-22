import {Seo} from '@shopify/hydrogen';

import {Layout} from '~/components/index.server';
import {Suspense} from 'react';
import {Preview} from '~/components/atama/preview.client';

export default function Homepage() {
  return (
    <Layout>
      <Suspense>
        <Seo
          type="page"
          data={{
            title: 'Preview',
          }}
        />
      </Suspense>
      {/* @ts-ignore */}
      <Preview />
    </Layout>
  );
}
