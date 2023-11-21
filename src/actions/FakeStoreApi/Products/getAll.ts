import { slugify } from '@/helpers/slugify';
import { Product } from '@/types/Product';

interface ProductFakeStoreApi {
  id: number|string;
  title: string;
  price: number;
  description: string;
  image: string;
}

export async function getAll(limit: number = 20): Promise<Product[]> {
  const response = await fetch(`https://fakestoreapi.com/products?&limit=${limit}`, {
    next: {
      revalidate: 3600,
    }
  });
  const products = await response.json() as ProductFakeStoreApi[];

  return products.map(product => {
    const slug = slugify(product.title);

    return {
      ...product,
      name: product.title,
      slug,
      url: `/produtos/${slug}`
    }
  });
}
