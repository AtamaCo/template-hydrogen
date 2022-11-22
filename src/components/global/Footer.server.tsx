import {FooterMenu} from '~/components';
import type {EnhancedMenu} from '~/lib/utils';

/**
 * A server component that specifies the content of the footer on the website
 */
export function Footer({menu}: {menu?: EnhancedMenu}) {
  const itemsCount = menu
    ? menu?.items?.length + 1 > 4
      ? 4
      : menu?.items?.length + 1
    : [];

  return (
    <footer role="contentinfo" className="bg-gray-100 dark:bg-zinc-900">
      <div
        className={`grid items-start grid-flow-row w-full gap-6 py-8 px-6 md:px-8 lg:px-12 
        border-b md:gap-8 lg:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-${itemsCount}
        overflow-hidden max-w-6xl mx-auto`}
      >
        <FooterMenu menu={menu} />
        <div
          className={`self-end opacity-50 md:col-span-2 lg:col-span-${itemsCount}`}
        >
          &copy; {new Date().getFullYear()} / Atama Technologies, Inc.
        </div>
      </div>
    </footer>
  );
}
