import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {TopBar} from '../components';
import {FakeInput, Promo, Subscribe, Category} from '../components/Internet';
import {WHITE_COLOR} from '../constans';

function Internet() {
    return (
        <SafeAreaView style={{backgroundColor: WHITE_COLOR}}>
            <TopBar title={'Paket Internet'} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <FakeInput />
                <Promo />
                <Subscribe />
                <Category />
            </ScrollView>
        </SafeAreaView>
    );
}

export default Internet;
