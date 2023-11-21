import { slugify } from '@/helpers/slugify';
import { Category } from '@/types/Category';

type CategoryFakeStoreApi = string;

export async function getAll(): Promise<Category[]> {
  const response = await fetch('https://fakestoreapi.com/products/categories', {
    next: {
      revalidate: 3600,
    }
  });
  const categories = await response.json() as CategoryFakeStoreApi[];

  return categories.map(category => {
    const slug = slugify(category);

    return {
      id: 0,
      name: category,
      slug,
      url: `/categorias/${slug}`,
    }
  });
}
