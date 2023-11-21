import { Product } from '@/types/Product';
import { ProductCard } from '../ProductCard';

export interface ProductSectionProps {
  title?: string;
  products: Product[];
  grid: number;
}

export function ProductSection({ title, products, grid }: ProductSectionProps) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        {title && <h2 className="font-bold tracking-tight text-gray-900 sm:text-4xl mb-10 text-center">{title}</h2>}

        <div className={`grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-${grid} xl:grid-cols-4 xl:gap-x-8`}>
          {products.map(product => <ProductCard product={product} key={product.id} />)}
        </div>
      </div>
    </div>
  )
}
