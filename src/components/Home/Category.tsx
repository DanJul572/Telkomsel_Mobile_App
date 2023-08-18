import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
    BLACK_COLOR,
    WHITE_COLOR,
    WINDOW_WIDTH,
    YELLOW_COLLOR,
} from '../../constans';

function Category() {
    const navigation = useNavigation();

    return (
        <View style={styles.category_container}>
            <Text style={styles.category_title}>Kategori Paket</Text>
            <View>
                <View style={[styles.category_content, styles.section_one]}>
                    <TouchableOpacity
                        style={styles.category_background}
                        activeOpacity={1}
                        onPress={() =>
                            navigation.navigate('Internet' as never)
                        }>
                        <View style={styles.background_image} />
                        <Image
                            source={require('../../assets/Images/Home/internet.png')}
                            style={styles.category_image}
                        />
                        <Text style={styles.category_text}>Internet</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.category_background}
                        activeOpacity={1}>
                        <View style={styles.background_image} />
                        <Image
                            source={require('../../assets/Images/Home/call.png')}
                            style={styles.category_image}
                        />
                        <Text style={styles.category_text}>Telepon</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.category_background}
                        activeOpacity={1}>
                        <View style={styles.background_image} />
                        <Image
                            source={require('../../assets/Images/Home/sms.png')}
                            style={styles.category_image}
                        />
                        <Text style={styles.category_text}>SMS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.category_background}
                        activeOpacity={1}>
                        <View style={styles.background_image} />
                        <Image
                            source={require('../../assets/Images/Home/roaming.png')}
                            style={styles.category_image}
                        />
                        <Text style={styles.category_text}>Roaming</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.category_content}>
                    <TouchableOpacity
                        style={styles.category_background}
                        activeOpacity={1}>
                        <View style={styles.background_image} />
                        <Image
                            source={require('../../assets/Images/Home/entertain.png')}
                            style={styles.category_image}
                        />
                        <Text style={styles.category_text}>Hiburan</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.category_background}
                        activeOpacity={1}>
                        <View style={styles.background_image} />
                        <Image
                            source={require('../../assets/Images/Home/flagship.png')}
                            style={styles.category_image}
                        />
                        <Text style={styles.category_text}>Unggulan</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.category_background}
                        activeOpacity={1}>
                        <View style={styles.background_image} />
                        <Image
                            source={require('../../assets/Images/Home/saved.png')}
                            style={styles.category_image}
                        />
                        <Text style={styles.category_text}>Tersimpan</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.category_background}
                        activeOpacity={1}>
                        <View style={styles.background_image} />
                        <Image
                            source={require('../../assets/Images/Home/history.png')}
                            style={styles.category_image}
                        />
                        <Text style={styles.category_text}>Riwayat</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    category_container: {
        padding: WINDOW_WIDTH * 0.05,
        backgroundColor: WHITE_COLOR,
        marginTop: WINDOW_WIDTH * 0.02,
    },
    category_title: {
        color: BLACK_COLOR,
        fontSize: WINDOW_WIDTH * 0.05,
        marginBottom: WINDOW_WIDTH * 0.05,
        fontWeight: 'bold',
    },
    section_one: {
        marginBottom: WINDOW_WIDTH * 0.05,
    },
    category_content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    category_background: {
        alignItems: 'center',
        width: WINDOW_WIDTH * 0.2,
        overflow: 'hidden',
    },
    background_image: {
        position: 'absolute',
        height: WINDOW_WIDTH * 0.15,
        width: WINDOW_WIDTH * 0.15,
        backgroundColor: YELLOW_COLLOR,
        padding: WINDOW_WIDTH * 0.025,
        borderRadius: WINDOW_WIDTH,
        opacity: 0.15,
    },
    category_image: {
        marginTop: WINDOW_WIDTH * 0.04,
        width: WINDOW_WIDTH * 0.07,
        height: WINDOW_WIDTH * 0.07,
        resizeMode: 'contain',
    },
    category_text: {
        color: BLACK_COLOR,
        marginTop: WINDOW_WIDTH * 0.045,
        fontSize: WINDOW_WIDTH * 0.04,
    },
});

export default Category;
