import { getAll } from '@/actions/FakeStoreApi/Products/getAll';
import { Banner } from '@/components/Banner';
import { Brands } from '@/components/Brands';
import { CategorySection } from '@/components/CategorySection';
import { Container } from '@/components/Container';
import { ProductSection } from '@/components/ProductSection';

export default async function Home() {
  const products = await getAll(4);

  return (
    <>
      <Banner />

      <Container>
        <Brands />
      </Container>

      <CategorySection title="Navegue entre nossas categorias" />

      <Container>
        <ProductSection title="Confira nossos destaques" products={products} grid={4} />
      </Container>
    </>
  )
}
