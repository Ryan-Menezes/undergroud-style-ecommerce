import { Card } from '../Card';

interface CategorySectionProps {
  title: string;
}

export function CategorySection({ title }: CategorySectionProps) {
  const categories = [
    { name: 'Masculino', image: '/categories/male.jpg', url: '/categorias/mens-clothing' },
    { name: 'Feminino', image: '/categories/female.jpg', url: '/categorias/womens-clothing' },
    { name: 'Infantil', image: '/categories/kids.jpg', url: '/categorias/kids-clothing' },
  ];

  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {categories.map(category => (
              <Card
                key={category.url}
                title={category.name}
                image={category.image}
                url={category.url}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
