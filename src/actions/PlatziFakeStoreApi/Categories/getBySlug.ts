import { getAll } from './getAll';
import { Category } from '@/types/Category';

export async function getBySlug(slug: string): Promise<Category|undefined> {
  const categories = await getAll();

  return categories.find(category => category.slug === slug);
}
