import { notFound } from 'next/navigation';
import { getBySlug } from '@/actions/FakeStoreApi/Products/getBySlug';
import { Container } from '@/components/Container';
import Image from 'next/image';
import { Metadata } from 'next';

interface ProductProps {
  params: {
    slug: string;
  }
}

export async function generateMetadata({ params }: ProductProps): Promise<Metadata> {
  const product = await getBySlug(params.slug);

  return {
    title: product?.name,
    description: product?.description,
  }
}

export default async function Product({ params }: ProductProps) {
  const product = await getBySlug(params.slug);

  if (!product) {
    notFound();
  }

  return (
    <Container>
      <div className="bg-white">
        <div className="pt-6">
          <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
            <div className="py-10 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              <Image src={product.image} alt={product.name} width={500} height={500} />
            </div>

            <div className="mt-4 lg:mt-0">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
              <p className="text-3xl tracking-tight text-gray-900 mt-5">{product.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>

              <form className="mt-10">
                <p className="text-base text-gray-900">{product.description}</p>

                <button type="submit" className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-red-500 px-8 py-3 text-base font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                  Adicionar ao carrinho
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
