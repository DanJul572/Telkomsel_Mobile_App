import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { BLACK_COLOR, BORDER_TEXT_INPUT_COLOR, DARK_GREY_COLOR, GREY_COLOR, RED_COLOR, WHITE_COLOR, WINDOW_WIDTH } from '../../constans';

function ProductCard ({product, isFirst, isLast}: any) {

    return (
        <View
            style={[
                styles.container,
                isFirst
                    ? styles.first_container
                        : isLast
                            ? styles.last_container
                    : { }
                ]}
            >
            <View style={styles.sub_container}>
                <Text style={styles.value_text}>{product.text_value}</Text>
                <View style={styles.expired_container}>
                    <Icon name='hourglass-half' color={BLACK_COLOR} size={WINDOW_WIDTH * 0.03} />
                    <Text style={styles.expired_text}>{product.expired}</Text>
                </View>
                <Icon name='bookmark' color={GREY_COLOR} size={WINDOW_WIDTH * 0.065} solid />
            </View>
            <View style={styles.sub_container_2}>
                <View>
                    <Text style={styles.price_text}>{product.price}</Text>
                    <Text style={styles.discount_price_text}>{product.discount_price}</Text>
                </View>
                <Text style={styles.title_text}>{product.title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: WHITE_COLOR,
        padding: WINDOW_WIDTH * 0.05,
        borderRadius: WINDOW_WIDTH * 0.02,
        borderWidth: WINDOW_WIDTH * 0.002,
        borderColor: BORDER_TEXT_INPUT_COLOR,
        marginRight: WINDOW_WIDTH * 0.025,
    },
    first_container: {
        marginLeft: WINDOW_WIDTH * 0.05
    },
    last_container: {
        marginRight: WINDOW_WIDTH * 0.05
    },
    sub_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: WINDOW_WIDTH * 0.6
    },
    sub_container_2: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        marginTop: WINDOW_WIDTH * 0.05
    },
    value_text: {
        color: BLACK_COLOR,
        fontWeight: 'bold',
        fontSize: WINDOW_WIDTH * 0.09,
    },
    expired_container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: GREY_COLOR,
        paddingVertical: WINDOW_WIDTH * 0.02,
        paddingHorizontal: WINDOW_WIDTH * 0.035,
        borderRadius: WINDOW_WIDTH * 0.05,
    },
    expired_text: {
        color: BLACK_COLOR,
        fontSize: WINDOW_WIDTH * 0.05,
        marginLeft: WINDOW_WIDTH * 0.02
    },
    discount_price_text: {
        color: RED_COLOR,
        fontWeight: 'bold',
        fontSize: WINDOW_WIDTH * 0.055
    },
    price_text: {
        color: DARK_GREY_COLOR,
        fontSize: WINDOW_WIDTH * 0.035,
        textDecorationLine: 'line-through'
    },
    title_text: {
        color: BLACK_COLOR,
        fontSize: WINDOW_WIDTH * 0.055,
    }
});

export default ProductCard;