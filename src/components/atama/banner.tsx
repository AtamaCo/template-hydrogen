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
  atama,
}: {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  image: string;
  link?: string;
  bannerTitleColor: 'white' | 'black';
  atama: object;
}) {
  const colors = {
    white: 'text-white',
    black: 'text-black',
  };

  return (
    <section className="w-full relative py-28 px-8 rounded mb-4" {...atama}>
      <div className="z-10 relative w-full md:w-1/2 flex flex-col justify-center items-start">
        <div className="grid gap-4 bg-black/40 p-10">
          <h2 className="text-sm	text-slate-300 uppercase">{subtitle}</h2>
          <h1 className={clsx(colors[bannerTitleColor], 'text-4xl font-bold')}>
            {title}
          </h1>
          <div className="text-slate-300">{description}</div>
          {link && (
            <div>
              <Link
                to={link}
                className="bg-yellow-500 text-white py-3 px-6 inline-block text-md font-semibold"
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
