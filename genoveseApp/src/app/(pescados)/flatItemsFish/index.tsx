import { ProductFlatItems } from '../../components/productFlatItems';
import ProductFish from '../productFish'


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

export default function FlatItemsFish() {
    return (
        <ProductFlatItems<ProductProps>
            table="produtos"
            category="Pescado"
            renderItem={({ item }) => <ProductFish fish={item} />}
            searchFields={['name', 'type', 'origin']}
        />
    );
}