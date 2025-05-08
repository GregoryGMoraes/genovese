import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import ProductDetails from '../../components/productDetails';

export default function SparklingDetails() {
    const { name, type, origin, image, description, price } = useLocalSearchParams();

    return (
        <ProductDetails
            name={name as string}
            type={type as string}
            origin={origin as string}
            image={Array.isArray(image) ? image[0] : (image as string)}
            description={description as string}
            price={Number(price)}
        />
    );
}
