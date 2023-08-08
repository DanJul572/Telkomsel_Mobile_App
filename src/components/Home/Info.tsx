import * as React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { BLACK_COLOR, RED_COLOR, DARK_GREY_COLOR, WHITE_COLOR, WINDOWS_HEIGHT, WINDOW_WIDTH, YELLOW_COLLOR } from '../../constans';

function Info () {
    return (
        <View>
            <View style={styles.name_background}>
                <View style={styles.name_conteiner}>
                    <View style={styles.name_text}>
                        <Text style={styles.hi_text}>Hi,</Text>
                        <Text style={styles.user_text}>Muhammad</Text>
                    </View>
                    <Icon name='qrcode' size={WINDOW_WIDTH * 0.06} style={styles.name_icon} />
                </View>
            </View>
            <View style={styles.sim_container} >
                <ImageBackground source={require('../../assets/Images/Home/sim_card.png')} style={styles.sim_background} resizeMode= 'contain'>
                    <View style={styles.sim_number_container}>
                        <Text style={styles.sim_number}>081290112333</Text>
                        <Image source={require('../../assets/Images/Home/logo.png')} />
                    </View>
                    <View style={styles.credit_container}>
                        <View>
                            <Text style={styles.credit_label}>Sisa Pulsa Anda</Text>
                            <Text style={styles.credit_text}>Rp34.000</Text>
                        </View>
                        <TouchableOpacity activeOpacity={1} style={styles.topup_button}>
                            <Text style={styles.topup_text}>Isi Pulsa</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.divider}/>
                    <View style={styles.expired_point_container}>
                        <View style={styles.expired_container}>
                            <Text style={styles.expired_label}>Berlaku Sampai </Text>
                            <Text style={styles.expired_text}>19 April 2020</Text>
                        </View>
                        <View style={styles.point_container}>
                            <View>
                                <Text style={styles.point_label}>Telkomsel Poin</Text>
                            </View>
                            <View style={styles.point_content_container}>
                                <Text style={styles.point_text}>172</Text>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </View>
            <View style={styles.quota_container}>
                <View style={styles.quota_content_container}>
                    <Text style={styles.quota_label}>Internet</Text>
                    <Text>
                        <Text style={styles.quota_text}>12.19 </Text>
                        <Text style={styles.quota_size}>GB</Text>
                    </Text>
                </View>
                <View style={styles.quota_content_container}>
                    <Text style={styles.quota_label}>Telepon</Text>
                    <Text>
                        <Text style={styles.quota_text}>0 </Text>
                        <Text style={styles.quota_size}>MIN</Text>
                    </Text>
                </View>
                <View style={styles.quota_content_container}>
                    <Text style={styles.quota_label}>SMS</Text>
                    <Text>
                        <Text style={styles.quota_text}>23 </Text>
                        <Text style={styles.quota_size}>SMS</Text>
                    </Text>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    name_background: {
        height: WINDOWS_HEIGHT * 0.25,
        backgroundColor: RED_COLOR
    },
    name_conteiner: {
        padding: WINDOW_WIDTH * 0.05,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    name_text: {
        flexDirection: 'row'
    },
    hi_text: {
        fontSize: WINDOW_WIDTH * 0.07,
        color: WHITE_COLOR,
        marginRight: WINDOW_WIDTH * 0.01
    },
    user_text: {
        fontSize: WINDOW_WIDTH * 0.07,
        color: WHITE_COLOR,
        fontWeight: 'bold'
    },
    name_icon: {
        color: WHITE_COLOR
    },
    sim_container: {
        position: 'absolute',
        top: WINDOWS_HEIGHT * 0.07,
        width: WINDOW_WIDTH,
        alignItems: 'center',
        zIndex: 2
    },
    sim_background: {
        width: WINDOW_WIDTH * 0.9,
        height: WINDOWS_HEIGHT * 0.25,
    },
    sim_number_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: WINDOW_WIDTH * 0.04,
        alignItems: 'center'
    },
    sim_number: {
        color: WHITE_COLOR,
        fontSize: WINDOW_WIDTH * 0.06,
        fontWeight: 'bold'
    },
    credit_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: WINDOW_WIDTH * 0.04,
        alignItems: 'flex-end'
    },
    credit_label: {
        color: WHITE_COLOR,
        fontSize: WINDOW_WIDTH * 0.04
    },
    credit_text: {
        color: WHITE_COLOR,
        fontSize: WINDOW_WIDTH * 0.08,
        fontWeight: 'bold'
    },
    topup_button: {
        backgroundColor: YELLOW_COLLOR,
        paddingVertical: WINDOW_WIDTH * 0.02,
        paddingHorizontal: WINDOW_WIDTH * 0.04,
        borderRadius: WINDOW_WIDTH * 0.01
    },
    topup_text: {
        color: BLACK_COLOR,
        fontSize: WINDOW_WIDTH * 0.045
    },
    divider: {
        height: WINDOWS_HEIGHT * 0.002,
        backgroundColor: BLACK_COLOR,
        opacity: 0.2,
        width: '100%',
        marginTop: WINDOW_WIDTH * 0.04,
    },
    expired_point_container: {
        padding: WINDOW_WIDTH * 0.04,
    },
    expired_container: {
        flexDirection: 'row',
        marginBottom: WINDOW_WIDTH * 0.01
    },
    expired_label: {
        color: WHITE_COLOR,
        fontSize: WINDOW_WIDTH * 0.04,
    },
    expired_text: {
        color: WHITE_COLOR,
        fontSize: WINDOW_WIDTH * 0.04,
        fontWeight: 'bold'
    },
    point_container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    point_label: {
        color: WHITE_COLOR,
        fontSize: WINDOW_WIDTH * 0.04,
        alignSelf: 'center'
    },
    point_content_container: {
        paddingVertical: WINDOW_WIDTH * 0.005,
        paddingHorizontal: WINDOW_WIDTH * 0.01,
        backgroundColor: YELLOW_COLLOR,
        borderRadius: WINDOW_WIDTH * 0.01,
        marginLeft: WINDOW_WIDTH * 0.01,
        textAlign: 'center'
    },
    point_text: {
        color: BLACK_COLOR,
        fontSize: WINDOW_WIDTH * 0.04,
        fontWeight: 'bold',
    },
    quota_container: {
        backgroundColor: WHITE_COLOR,
        paddingTop: WINDOWS_HEIGHT * 0.1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: WINDOW_WIDTH * 0.05
    },
    quota_content_container: {
        width: WINDOW_WIDTH * 0.265,
        padding: WINDOW_WIDTH * 0.02,
        borderRadius: WINDOW_WIDTH * 0.01,
        backgroundColor: WHITE_COLOR,
        shadowColor: BLACK_COLOR,
        shadowOffset:{
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.5,
        shadowRadius: WINDOW_WIDTH * 0.01,
        elevation: WINDOW_WIDTH * 0.01, 
    },
    quota_label: {
        color: BLACK_COLOR,
        fontSize: WINDOW_WIDTH * 0.04
    },
    quota_text: {
        color: RED_COLOR,
        fontSize: WINDOW_WIDTH * 0.08,
        fontWeight: 'bold'
    },
    quota_size: {
        color: DARK_GREY_COLOR,
        fontSize: WINDOW_WIDTH * 0.04
    }
});


export default Info;