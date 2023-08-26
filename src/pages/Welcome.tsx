import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, Image} from 'react-native';
import {RED_COLOR, WINDOW_HEIGHT, WINDOW_WIDTH} from '../constans';
import {useNavigation} from '@react-navigation/native';

const Welcome = () => {
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Tab' as never);
        }, 1000);
    }, [navigation]);

    return (
        <SafeAreaView style={styles.container}>
            <Image source={require('../assets/Images/Welcome/logo.png')} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: RED_COLOR,
        height: WINDOW_HEIGHT,
        width: WINDOW_WIDTH,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Welcome;
