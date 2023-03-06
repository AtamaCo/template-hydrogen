import {Image, Link} from '@shopify/hydrogen';
import clsx from 'clsx';

export function Card({
  title,
  description,
  image,
  buttonText,
  buttonBackground,
  atama,
}: {
  title: string;
  description: string;
  image: string;
  buttonText: string;
  buttonBackground: 'black' | 'white' | 'green' | 'yellow';
  atama: object;
}) {
  const buttonColors = {
    black: 'bg-black text-white',
    white: 'bg-white text-black',
    green: 'bg-green-500 text-white',
    yellow: 'bg-yellow-500 text-white',
  };

  return (
    <div
      className="flex flex-col h-full dark:border-2 dark:border-zinc-700 rounded"
      {...atama}
    >
      <div className="card-image--top">
        <Image
          src={image}
          alt=""
          width="374"
          height="249"
          className="object-cover w-full h-auto"
        />
      </div>
      <div className="grid gap-4 bg-zinc-100 dark:bg-zinc-900 py-6 grow">
        <h2 className="text-center font-bold text-2xl px-6">{title}</h2>
        <p className="px-6 text-slate-400">{description}</p>
        <div className="flex justify-center content-start self-end">
          <Link
            to="#"
            className={clsx(
              buttonColors[buttonBackground],
              'py-2 px-4 font-semibold',
            )}
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
}
