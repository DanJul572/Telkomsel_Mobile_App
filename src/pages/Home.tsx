import React, {useEffect} from 'react';
import {SafeAreaView, ScrollView, BackHandler} from 'react-native';
import {Category, Info, NewContent} from '../components/Home';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation();

    useEffect(() => {
        const backAction = () => {
            if (navigation.isFocused()) {
                BackHandler.exitApp();
                return true;
            }
        };

        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backAction,
        );

        return () => backHandler.remove();
    }, [navigation]);

    return (
        <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Info />
                <Category />
                <NewContent />
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;
