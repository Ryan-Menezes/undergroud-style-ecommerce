import { slugify } from '@/helpers/slugify';
import { Product } from '@/types/Product';
import { getBySlug } from '../Categories/getBySlug';

interface ProductFakeStoreApi {
  id: number|string;
  title: string;
  price: number;
  description: string;
  images: string[];
}

export async function getByCategory(slug: string): Promise<Product[]> {
  const category = await getBySlug(slug);

  if (!category) {
    return [];
  }

  const response = await fetch(`https://api.escuelajs.co/api/v1/products/?categoryId=${category.id}`, {
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
      url: `/produtos/${slug}`,
      image: product.images[0]
    }
  });
}
