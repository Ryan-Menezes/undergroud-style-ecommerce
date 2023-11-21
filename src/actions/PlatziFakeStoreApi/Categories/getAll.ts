import { slugify } from '@/helpers/slugify';
import { Category } from '@/types/Category';

type CategoryFakeStoreApi = {
  id: number|string;
  name: string;
  image: string;
};

export async function getAll(limit: number = 5): Promise<Category[]> {
  const response = await fetch(`https://api.escuelajs.co/api/v1/categories?limit=${limit}`, {
    next: {
      revalidate: 3600,
    }
  });
  const categories = await response.json() as CategoryFakeStoreApi[];

  return categories.map(category => {
    const slug = slugify(category.name);

    return {
      id: category.id,
      name: category.name,
      slug,
      url: `/categorias/${slug}`,
    }
  });
}
