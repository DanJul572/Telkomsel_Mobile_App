import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { BLACK_COLOR, RED_COLOR, WHITE_COLOR, WINDOW_WIDTH } from '../../constans';

function NewContent () {
    return (
        <View style={styles.container}>
            <View style={styles.text_container}>
                <Text style={styles.content_title}>Terbaru Dari Telkomsel</Text>
                <Text style={styles.content_link}>Lihat Semua</Text>
            </View>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                <Image source={require('../../assets/Images/Home/new_content_1.png')} style={[styles.content_item, styles.first_content_item]} />
                <Image source={require('../../assets/Images/Home/new_content_2.png')} style={[styles.content_item, styles.last_content_item]} />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: WHITE_COLOR
    },
    text_container: {
        padding: WINDOW_WIDTH * 0.05,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    content_title: {
        color: BLACK_COLOR,
        fontSize: WINDOW_WIDTH * 0.05,
        fontWeight: 'bold',
    },
    content_link: {
        color: RED_COLOR,
        fontSize: WINDOW_WIDTH * 0.04,
        fontWeight: 'bold'
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

export default NewContent;