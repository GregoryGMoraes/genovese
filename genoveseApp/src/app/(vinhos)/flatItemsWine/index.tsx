import { ProductFlatItems } from '../../components/productFlatItems';
import ProductWine from '../productWine';

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

export default function FlatItemWine() {
    return (
        <ProductFlatItems<ProductProps>
            table="produtos"
            category="Vinho"
            renderItem={({ item }) => <ProductWine wine={item} />}
            searchFields={['name', 'type', 'origin']}
        />
    );
}

