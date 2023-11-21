import { getAll } from '@/actions/FakeStoreApi/Categories/getAll';
import Image from 'next/image';
import Link from 'next/link';

export async function Header() {
  const categories = await getAll();

  return (
    <div className="bg-white">
      <header className="relative bg-white">
        <nav aria-label="Top" className="border-b border-gray-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center">
              <button type="button" className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden">
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open menu</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>

              <div className="ml-4 flex lg:ml-0">
                <Link href="/">
                  <Image
                    className="h-8 w-auto"
                    src="/logo.png"
                    alt="Underground Style"
                    width={40}
                    height={40}
                  />
                </Link>
              </div>

              <div className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  <Link href="/" className="flex items-center text-sm font-medium text-gray-700 hover:text-red-500">Início</Link>
                  <Link href="/produtos" className="flex items-center text-sm font-medium text-gray-700 hover:text-red-500">Produtos</Link>
                  {categories.map(category => (
                    <Link key={category.url} href={category.url} className="flex items-center text-sm font-medium text-gray-700 hover:text-red-500">
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="ml-auto flex items-center">
                <div className="ml-4 flow-root lg:ml-6">
                  <Link href="/" className="group -m-2 flex items-center p-2">
                    <svg className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-red-500" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-red-500">0</span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
