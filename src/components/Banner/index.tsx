import Image from 'next/image';
import Link from 'next/link';

export function Banner() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Separamos o melhor para você</h1>
            <p className="mt-4 text-xl text-gray-500">This year, our new summer collection will shelter you from the harsh elements of a world that doesnt care if you live or die.</p>
          </div>
          <div>
            <div className="mt-10">
              <div aria-hidden="true" className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-500">
                        <Image
                          src="/banner/01.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                          width={500}
                          height={500}
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          src="/banner/02.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                          width={500}
                          height={500}
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          src="/banner/03.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                          width={500}
                          height={500}
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          src="/banner/04.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                          width={500}
                          height={500}
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          src="/banner/05.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                          width={500}
                          height={500}
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          src="/banner/06.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                          width={500}
                          height={500}
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          src="/banner/07.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                          width={500}
                          height={500}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Link href="/produtos" className="inline-block rounded-md border border-transparent bg-red-500 px-8 py-3 text-center font-medium text-white hover:bg-red-600">
                Comprar Agora
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
