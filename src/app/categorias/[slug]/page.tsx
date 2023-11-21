import { getBySlug } from '@/actions/FakeStoreApi/Categories/getBySlug';
import { getByCategory } from '@/actions/FakeStoreApi/Products/getByCategory';
import { ProductsPage } from '@/components/ProductsPage';
import { Metadata } from 'next';

interface ProductsCategoryProps {
  params: {
    slug: string;
  }
}

export async function generateMetadata({ params }: ProductsCategoryProps): Promise<Metadata> {
  const category = await getBySlug(params.slug);

  return {
    title: category?.name,
  }
}

export default async function ProductsCategory({ params }: ProductsCategoryProps) {
  const products = await getByCategory(params.slug);

  return <ProductsPage products={products} />
}
