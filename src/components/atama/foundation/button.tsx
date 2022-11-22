import {Link} from '@shopify/hydrogen';
import clsx from 'clsx';
import {ReactNode} from 'react';

export function Button({
  background = 'black',
  href,
  children,
}: {
  background?: 'black' | 'white' | 'green' | 'yellow';
  href: string;
  children: ReactNode;
}) {
  const colors = {
    black: 'bg-black text-white',
    white: 'bg-white text-black',
    green: 'bg-green-500 text-white',
    yellow: 'bg-yellow-500 text-white',
  };

  return (
    <Link to={href} className={clsx(colors[background], 'py-3 px-8')}>
      {children}
    </Link>
  );
}
