import {Link, Image} from '@shopify/hydrogen';
import clsx from 'clsx';

export function Banner({
  title,
  subtitle,
  description,
  buttonText,
  image,
  link,
  bannerTitleColor,
  bannerSubtitleColor,
  bannerDescriptionColor,
  atama,
}: {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  image: string;
  link?: string;
  bannerTitleColor: 'white' | 'black' | 'green' | 'yellow';
  bannerSubtitleColor: 'white' | 'black' | 'green' | 'yellow';
  bannerDescriptionColor: 'white' | 'black' | 'green' | 'yellow';
  atama: object;
}) {
  const colors = {
    white: 'text-white',
    black: 'text-black',
    green: 'text-green-500',
    yellow: 'text-yellow-500',
  };

  return (
    <section className="w-full relative py-28 px-8 rounded" {...atama}>
      <div className="z-10 relative w-full md:w-1/2 flex flex-col justify-center items-start gap-3">
        <div className="grid gap-4">
          <h2 className={clsx(colors[bannerSubtitleColor], 'uppercase')}>
            {subtitle}
          </h2>
          <h1 className={clsx(colors[bannerTitleColor], 'uppercase text-4xl')}>
            {title}
          </h1>
          <div className={clsx(colors[bannerDescriptionColor])}>
            {description}
          </div>
          {link && (
            <div>
              <Link
                to={link}
                className="uppercase bg-black text-white py-3 px-8 inline-block underline underline-offset-2 text-sm font-semibold"
              >
                {buttonText}
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="absolute w-full h-full top-0 left-0 z-0">
        <div className="card-image h-full">
          <Image
            src={image}
            width={1024}
            height="auto"
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
