import React, { useState } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import ProductCard from './ProductCard';
import { BLACK_COLOR, WINDOW_WIDTH } from '../../constans';

function Subscribe () {
    const [products, setProducts] = useState([
        {
            id: 1,
            text_value: '14 GB',
            expired: '30 Hari',
            price: 'Rp99.000',
            discount_price: 'Rp96.000',
            title: 'Internet OMG!'
        },
        {
            id: 2,
            text_value: '27 GB',
            expired: '30 Hari',
            price: 'Rp145.000',
            discount_price: 'Rp133.000',
            title: 'iPhone Plane'
        },
    ])

    return (
        <View style={{ marginTop: WINDOW_WIDTH * 0.05 }}>
            <Text style={styles.title}>Langganan Kamu</Text>
            <FlatList
                horizontal={true}
                data={products}
                renderItem={({item, index}: any) => <ProductCard product={item} isFirst={index == 0 ? true : false} isLast={(index + 1) == products.length ? true : false}/>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        color: BLACK_COLOR,
        fontWeight: 'bold',
        fontSize: WINDOW_WIDTH * 0.05,
        marginLeft: WINDOW_WIDTH * 0.05,
        marginBottom: WINDOW_WIDTH * 0.025
    }
});

export default Subscribe;