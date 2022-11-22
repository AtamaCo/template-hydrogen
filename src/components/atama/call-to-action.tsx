import clsx from 'clsx';
import {Button} from './foundation/button';

export function CallToAction({
  title,
  description,
  buttonText,
  background,
  atama,
}: {
  title: string;
  description: string;
  buttonText: string;
  background: 'gray';
  atama: object;
}) {
  const backgroundColors = {
    gray: 'bg-neutral-300 dark:bg-zinc-900 dark:border-2 dark:border-zinc-800 rounded',
  };

  return (
    <div
      className={clsx(
        backgroundColors[background],
        'flex flex-col md:flex-row gap-16 px-8 py-10',
      )}
      {...atama}
    >
      <div className="grid gap-4">
        <p className="font-bold text-4xl">{title}</p>
        <p>{description}</p>
      </div>
      <div className="flex items-center">
        <Button href="#">{buttonText}</Button>
      </div>
    </div>
  );
}
