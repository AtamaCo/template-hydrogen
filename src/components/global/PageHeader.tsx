import clsx from 'clsx';

import {Heading} from '~/components';

export function PageHeader({
  children,
  className,
  heading,
  variant = 'default',
  ...props
}: {
  children?: React.ReactNode;
  className?: string;
  heading?: string;
  variant?: 'default' | 'blogPost' | 'allCollections';
  [key: string]: any;
}) {
  const variants: Record<string, string> = {
    default:
      'grid w-full max-w-6xl m-auto gap-8 px-6 lg:px-0 py-8 md:py-8 lg:py-12 justify-items-start',
    blogPost:
      'grid max-w-6xl m-auto md:text-center w-full gap-4 p-6 py-8 md:p-8 lg:p-12 md:justify-items-center',
    allCollections:
      'flex w-full max-w-6xl m-auto justify-between items-baseline gap-8 py-6 md:py-8 lg:py-12 px-6 lg:px-0',
  };

  const styles = clsx(variants[variant], className);

  return (
    <header {...props} className={styles}>
      {heading && (
        <Heading as="h1" width="narrow" size="heading" className="inline-block">
          {heading}
        </Heading>
      )}
      {children}
    </header>
  );
}
