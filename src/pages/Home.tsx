import * as React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {Category, Info, NewContent} from '../components/Home';

function Home() {
    return (
        <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Info />
                <Category />
                <NewContent />
            </ScrollView>
        </SafeAreaView>
    );
}

export default Home;
