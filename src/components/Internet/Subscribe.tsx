import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import ProductCard from './ProductCard';
import { BLACK_COLOR, WINDOW_WIDTH } from '../../constans';
import products from '../../dummy/products.json';

function Subscribe () {

    return (
        <View style={{ marginTop: WINDOW_WIDTH * 0.05 }}>
            <Text style={styles.title}>Langganan Kamu</Text>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{ width: WINDOW_WIDTH }}>
                {products.map((product: any, index: any) => {
                    return (
                        <ProductCard
                            key={product.id}
                            product={product}
                            isFirst={index == 0 ? true : false} isLast={(index + 1) == products.length ? true : false}
                            isHorizontal={true}
                        />
                    )
                })}
            </ScrollView>
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