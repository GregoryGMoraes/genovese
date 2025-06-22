import { ProductFlatItems } from '../../components/productFlatItems';
import ProductChocolate from '../productChocolate'

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


export default function FlatItemsChocolate() {
    return (
        <ProductFlatItems<ProductProps>
            table="produtos"
            category="Chocolate"
            renderItem={({ item }) => <ProductChocolate chocolate={item} />}
            searchFields={['name', 'type', 'origin']}
        />
    );
} 