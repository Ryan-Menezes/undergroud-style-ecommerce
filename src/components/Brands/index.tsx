import Image from 'next/image';

export function Brands() {
  return (
    <div className="bg-white py-8 sm:py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">Trabalhamos com as melhores marcas</h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <Image className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="/brands/nike.jpg" alt="Nike" width="158" height="48" />
          <Image className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="/brands/lacoste.jpg" alt="Lacoste" width="158" height="48" />
          <Image className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="/brands/adidas.png" alt="Adidas" width="158" height="48" />
          <Image className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1" src="/brands/polo.jpg" alt="Polo" width="158" height="48" />
          <Image className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1" src="/brands/hollister.png" alt="Statamic" width="158" height="48" />
        </div>
      </div>
    </div>
  )
}
