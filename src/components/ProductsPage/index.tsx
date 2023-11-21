import Link from 'next/link';
import { getAll } from '@/actions/FakeStoreApi/Categories/getAll';
import { ProductSection } from '@/components/ProductSection';
import { Container } from '@/components/Container';
import { Product } from '@/types/Product';

interface ProductPageProps {
  products: Product[];
}

export async function ProductsPage({ products }: ProductPageProps) {
  const categories = await getAll();

  return (
    <Container>
      <div className="bg-white">
        <div>
          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-10">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900">Produtos</h1>
            </div>

            <section aria-labelledby="products-heading" className="pb-24 pt-6">
              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-6">
                <ul role="list" className="space-y-4 border-gray-200 pb-6 text-sm font-medium text-gray-900">
                  {categories.map(category => (
                    <li key={category.slug}>
                      <Link href={category.url} className="hover:text-red-500">{category.name}</Link>
                    </li>
                  ))}
                </ul>

                <div className="lg:col-span-5">
                  <ProductSection products={products} grid={3} />
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </Container>
  )
}
