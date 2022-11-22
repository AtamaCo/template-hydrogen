import {ReactNode} from 'react';

export function ThreeColumnsGrid({children}: {children: ReactNode}) {
  return (
    <div className="grid grid-rows-3 md:grid-cols-3 md:grid-rows-none gap-4 auto-rows-fr">
      {children}
    </div>
  );
}

export function ThreeColumnsGridItem({
  children,
  ...props
}: {
  children: ReactNode;
}) {
  return <div {...props}>{children}</div>;
}
