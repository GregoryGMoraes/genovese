import { ProductFlatItems } from '../../components/productFlatItems';
import ProductCold from '../productCold';

export interface ProductProps {
    id: string;
    name: string;
    brand: string;
    description: string;
    price: number;
    category: string;
    type: string;
    origin: string;
    image: string;
}

export default function FlatItemsCold() {
  return (
    <ProductFlatItems<ProductProps>
      table="produtos"
      category="Frios"
      renderItem={({ item }) => <ProductCold cold={item} />}
      searchFields={['name', 'type', 'origin']}
    />
  );
}