import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  title: string;
  image: string;
  url: string;
}

export function Card({ title, image, url }: CardProps) {
  return (
    <div className="group relative">
      <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
        <Image src={image} alt={title} width={600} height={600} className="h-full w-full object-cover object-center" />
      </div>
      <h3 className="mt-6 text-sm text-gray-500">
        <Link href={url}>
          <span className="absolute inset-0"></span>
        </Link>
      </h3>

      <p className="text-base font-semibold text-gray-900 text-center">{title}</p>
    </div>
  )
}
