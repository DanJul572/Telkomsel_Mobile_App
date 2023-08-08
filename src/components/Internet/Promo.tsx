import React from 'react';
import { View, ScrollView, Image, StyleSheet } from 'react-native';
import { WINDOW_WIDTH } from '../../constans';

function Promo () {
    return (
        <View style={styles.container}>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                <Image source={require('../../assets/Images/Home/new_content_1.png')} style={[styles.content_item, styles.first_content_item]} />
                <Image source={require('../../assets/Images/Home/new_content_2.png')} style={[styles.content_item, styles.last_content_item]} />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: WINDOW_WIDTH * 0.03
    },
    first_content_item: {
        marginLeft: WINDOW_WIDTH * 0.05
    },
    content_item: {
        resizeMode: 'contain',
        height: WINDOW_WIDTH * 0.25,
        width: WINDOW_WIDTH * 0.55,
        marginLeft: WINDOW_WIDTH * 0.025
    },
    last_content_item: {
        marginRight: WINDOW_WIDTH * 0.05
    }
});

export default Promo;