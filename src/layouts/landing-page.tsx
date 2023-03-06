import type {ReactNode} from 'react';

import {forwardRef} from 'react';
import {
  ThreeColumnsGrid,
  ThreeColumnsGridItem,
} from '~/components/atama/foundation/three-column-grid';

interface LandingPageProps {
  top: ReactNode;
  'top-left': ReactNode;
  'top-middle': ReactNode;
  'top-right': ReactNode;
  bottom: ReactNode;
}

export const LandingPage = forwardRef<HTMLDivElement, LandingPageProps>(
  (
    {
      top,
      'top-left': topLeft,
      'top-middle': topMiddle,
      'top-right': topRight,
      bottom,
    },
    ref,
  ) => {
    return (
      <div ref={ref} className="max-w-6xl mx-auto grid gap-4 mb-4">
        <div data-atama-placement="Top">{top}</div>
        <ThreeColumnsGrid>
          <ThreeColumnsGridItem data-atama-placement="Top Left">
            {topLeft}
          </ThreeColumnsGridItem>
          <ThreeColumnsGridItem data-atama-placement="Top Middle">
            {topMiddle}
          </ThreeColumnsGridItem>
          <ThreeColumnsGridItem data-atama-placement="Top Right">
            {topRight}
          </ThreeColumnsGridItem>
        </ThreeColumnsGrid>
        <div data-atama-placement="Bottom">{bottom}</div>
      </div>
    );
  },
);

LandingPage.displayName = 'LandingPage';
