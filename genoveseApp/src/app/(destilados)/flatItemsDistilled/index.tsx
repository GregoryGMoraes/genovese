import { ProductFlatItems } from '../../components/productFlatItems';
import ProductDistilled from '../productDistilled';

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

export default function FlatItemsDistilled() {
  return (
    <ProductFlatItems<ProductProps>
      table="produtos"
      category="Destilado"
      renderItem={({ item }) => <ProductDistilled distilled={item} />}
      searchFields={['name', 'type', 'origin']}
    />
  );
}