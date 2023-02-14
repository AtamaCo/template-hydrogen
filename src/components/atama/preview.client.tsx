// @ts-ignore
import {withPreview} from '@atamaco/preview-react';
// @ts-ignore
import {AtamaRenderer} from '@atamaco/renderer-react';

import {components, layouts} from '~/lib/atama.client';

const RenderPreview = withPreview(AtamaRenderer, 'https://composer.atama.app');

export function Preview() {
  return <RenderPreview layouts={layouts} components={components} />;
}
