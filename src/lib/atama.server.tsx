import {FetcherAtama} from '@atamaco/fetcher-atama';
// @ts-ignore
import {AtamaRenderer} from '@atamaco/renderer-react';
import {Banner} from '~/components/atama/banner';
import {CallToAction} from '~/components/atama/call-to-action';
import {Card} from '~/components/atama/card';
import {Homepage} from '~/layouts/homepage';
import {LandingPage} from '~/layouts/landing-page';
import {getConfigValue} from '~/lib/configuration';

export const fetcher = new FetcherAtama({
  apiKey: getConfigValue('PUBLIC_ATAMA_API_KEY') as string,
  environment: getConfigValue('PUBLIC_ATAMA_ENVIRONMENT')
    ? (getConfigValue('PUBLIC_ATAMA_ENVIRONMENT') as 'prod' | 'preview')
    : 'prod',
  workspaceId: getConfigValue('PUBLIC_ATAMA_WORKSPACE_ID') as string,
  url: getConfigValue('PUBLIC_ATAMA_API_URL') as string,
});

export const layouts = {
  homepage: Homepage,
  'landing-page': LandingPage,
};

export const components = {
  Banner,
  Card,
  CallToAction,
};

export function Render({
  data,
}: {
  data: Parameters<typeof AtamaRenderer>[0]['data'];
}) {
  return (
    <AtamaRenderer layouts={layouts} components={components} data={data} />
  );
}
