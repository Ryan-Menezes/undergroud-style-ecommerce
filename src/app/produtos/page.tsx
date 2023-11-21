import { getAll } from '@/actions/FakeStoreApi/Products/getAll';
import { ProductsPage } from '@/components/ProductsPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Produtos',
}

export default async function Products() {
  const products = await getAll();

  return <ProductsPage products={products} />
}
