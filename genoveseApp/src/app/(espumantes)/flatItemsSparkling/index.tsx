import { ProductFlatItems } from '../../components/productFlatItems';
import ProductSparkling from '../productSparkling';

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

export default function FlatItemsSparkling() {
    return (
        <ProductFlatItems<ProductProps>
            table="produtos"
            category="Espumante"
            renderItem={({ item }) => <ProductSparkling sparkling={item} />}
            searchFields={['name', 'type', 'origin']}
        />
    );
}   