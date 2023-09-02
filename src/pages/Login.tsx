import React, {useState} from 'react';
import {
    View,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {
    BLACK_COLOR,
    BORDER_TEXT_INPUT_COLOR,
    DARK_GREY_COLOR,
    RED_COLOR,
    TEXT_PLACEHOLDER_COLOR,
    WHITE_COLOR,
    WINDOW_HEIGHT,
    WINDOW_WIDTH,
} from '../constans';
import LogoIcon from '../assets/Images/Login/user.svg';
import FacebookIcon from '../assets/Images/Login/facebook.svg';
import TwitterIcon from '../assets/Images/Login/twitter.svg';

const Login = () => {
    const [check, setCheck] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.image_container}>
                <LogoIcon
                    width={WINDOW_WIDTH * 0.35}
                    height={WINDOW_WIDTH * 0.35}
                />
            </View>
            <Text style={styles.title_text}>
                Silahkan masuk dengan nomor telkomsel kamu
            </Text>
            <View>
                <Text style={styles.input_label}>Nomor HP</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Cth. 08129011xxxx"
                    placeholderTextColor={TEXT_PLACEHOLDER_COLOR}
                />
            </View>
            <View style={styles.policy_container}>
                <CheckBox
                    value={check}
                    tintColors={{true: RED_COLOR, false: DARK_GREY_COLOR}}
                    onChange={() => setCheck(!check)}
                />
                <View style={styles.policy_text_container}>
                    <Text style={styles.policy_text}>
                        Saya menyetujui{' '}
                        <Text style={styles.link_text}>syarat</Text>,{' '}
                        <Text style={styles.link_text}>Ketentuan</Text>, dan{' '}
                        <Text style={styles.link_text}>Privasi</Text> Telkomsel
                    </Text>
                </View>
            </View>
            <TouchableOpacity style={styles.login_button} activeOpacity={1}>
                <Text style={styles.login_button_text}>LANJUT</Text>
            </TouchableOpacity>
            <Text style={styles.login_option_title}>
                Atau masuk menggunakan
            </Text>
            <View style={styles.login_option_container}>
                <TouchableOpacity
                    style={styles.login_facebook}
                    activeOpacity={1}>
                    <FacebookIcon
                        width={WINDOW_WIDTH * 0.055}
                        height={WINDOW_WIDTH * 0.055}
                    />
                    <Text style={styles.login_facebook_text}>Facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.login_twitter}
                    activeOpacity={1}>
                    <TwitterIcon
                        width={WINDOW_WIDTH * 0.055}
                        height={WINDOW_WIDTH * 0.055}
                    />
                    <Text style={styles.login_twitter_text}>Twitter</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        height: WINDOW_HEIGHT,
        width: WINDOW_WIDTH,
        backgroundColor: WHITE_COLOR,
        padding: WINDOW_WIDTH * 0.055,
    },
    image_container: {
        marginTop: WINDOW_WIDTH * 0.1,
    },
    image: {
        width: WINDOW_WIDTH * 0.45,
        height: WINDOW_WIDTH * 0.45,
    },
    title_text: {
        marginTop: WINDOW_WIDTH * 0.07,
        marginBottom: WINDOW_WIDTH * 0.05,
        color: BLACK_COLOR,
        fontWeight: 'bold',
        fontSize: WINDOW_WIDTH * 0.045,
    },
    input_label: {
        color: BLACK_COLOR,
        fontSize: WINDOW_WIDTH * 0.035,
        fontWeight: 'bold',
        marginBottom: WINDOW_WIDTH * 0.025,
    },
    input: {
        borderColor: BORDER_TEXT_INPUT_COLOR,
        borderWidth: WINDOW_WIDTH * 0.0025,
        borderRadius: WINDOW_WIDTH * 0.015,
        padding: WINDOW_WIDTH * 0.025,
    },
    policy_container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: WINDOW_WIDTH * 0.035,
    },
    policy_text_container: {
        width: WINDOW_WIDTH * 0.8,
        marginLeft: WINDOW_WIDTH * 0.013,
    },
    policy_text: {
        flexWrap: 'wrap',
        color: BLACK_COLOR,
    },
    link_text: {
        color: RED_COLOR,
        fontWeight: 'bold',
    },
    login_button: {
        backgroundColor: RED_COLOR,
        padding: WINDOW_WIDTH * 0.025,
        borderRadius: WINDOW_WIDTH * 0.01,
        alignItems: 'center',
        marginTop: WINDOW_WIDTH * 0.05,
    },
    login_button_text: {
        color: WHITE_COLOR,
        fontSize: WINDOW_WIDTH * 0.035,
    },
    login_option_title: {
        textAlign: 'center',
        color: DARK_GREY_COLOR,
        marginVertical: WINDOW_WIDTH * 0.035,
    },
    login_option_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    login_facebook: {
        borderWidth: WINDOW_WIDTH * 0.0025,
        borderColor: '#3B5998',
        borderRadius: WINDOW_WIDTH * 0.01,
        width: WINDOW_WIDTH * 0.42,
        padding: WINDOW_WIDTH * 0.025,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: WINDOW_WIDTH * 0.015,
    },
    login_facebook_text: {
        color: '#3B5998',
        fontSize: WINDOW_WIDTH * 0.035,
        fontWeight: 'bold',
    },
    login_twitter: {
        borderWidth: WINDOW_WIDTH * 0.0025,
        borderColor: '#1DA1F2',
        borderRadius: WINDOW_WIDTH * 0.01,
        width: WINDOW_WIDTH * 0.42,
        padding: WINDOW_WIDTH * 0.025,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: WINDOW_WIDTH * 0.015,
    },
    login_twitter_text: {
        color: '#1DA1F2',
        fontSize: WINDOW_WIDTH * 0.035,
        fontWeight: 'bold',
    },
});

export default Login;
