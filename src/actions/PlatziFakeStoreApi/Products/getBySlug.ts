import { Product } from '@/types/Product';
import { getAll } from './getAll';

export async function getBySlug(slug: string): Promise<Product|undefined> {
  const products = await getAll();

  return products.find(product => product.slug === slug);
}
