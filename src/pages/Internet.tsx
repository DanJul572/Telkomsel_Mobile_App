import React, { useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { TopBar } from '../components';
import { Search, Promo, Subscribe } from '../components/Internet';
import { WHITE_COLOR } from '../constans';

function Internet () {
    const [keyword, setKeyword] = useState('');
    const [onSearch, setOnSearch] = useState(false);
    const [onFilter, setOnFilter] = useState(false);

    return (
        <SafeAreaView style={{ backgroundColor: WHITE_COLOR }}>
            <TopBar title={'Paket Internet'} />
                <Search
                    keyword={keyword}
                    setKeyword={setKeyword}
                    onSearch={onSearch}
                    setOnSearch={setOnSearch}
                    onFilter={onFilter}
                    setOnFilter={setOnFilter}
                />
                {!onSearch && (
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Promo />
                        <Subscribe />
                    </ScrollView>
                )}
        </SafeAreaView>
    )
}


export default Internet;