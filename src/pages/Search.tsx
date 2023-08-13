import React, { useState } from 'react';
import { View, Keyboard, TextInput, StyleSheet, TouchableOpacity, Text, FlatList, ScrollView, Modal, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { BLACK_COLOR, BORDER_TEXT_INPUT_COLOR, DARK_GREY_COLOR, GREY_COLOR, RED_COLOR, TEXT_PLACEHOLDER_COLOR, WHITE_COLOR, WINDOW_HEIGHT, WINDOW_WIDTH } from '../constans';
import ProductCard from '../components/Internet/ProductCard';
import products from '../dummy/products.json';
import searchPopular from '../dummy/searchPopular.json';
import searchHistory from '../dummy/searchHistory.json';
import Filter from '../components/Search/Filter';
import { useNavigation } from '@react-navigation/native';

function Search () {
    const [modaSortlVisible, setModaSortlVisible] = useState(false);
    const [modalFilterVisible, setFilterModalVisible] = useState(false);
    const [keyword, setKeyword] = useState('');
    const [onSearch, setOnSearch] = useState(false);
    const [onFilter, setOnFilter] = useState(false);

    const navigation = useNavigation();

    const getHistoryComponent = (item: any) => {
        return (
            <View style={styles.history_item_container}>
                <View style={styles.history_item_sub_container}>
                    <Icon name='clock' size={WINDOW_WIDTH * 0.05} style={styles.history_icon} />
                    <Text style={styles.history_text}>{item}</Text>
                </View>
                <Icon name='times' size={WINDOW_WIDTH * 0.05} style={styles.history_icon} />
            </View>
        )
    }
    
    const getPopularComponent = (item: any, index: any) => {
        return (
            <View key={index} style={styles.popular_item_container}>
                <Text style={styles.popular_text}>{item}</Text>
            </View>
        )
    }

    return (
        <View style={ styles.search_conteiner_absolute }>
            <View style={styles.search_container}>
                {onFilter && (
                    <TouchableOpacity style={styles.cancel_filter_container} activeOpacity={1} onPress={() => setOnFilter(false)}>
                        <Icon name='chevron-left' size={WINDOW_WIDTH * 0.05} color={BLACK_COLOR} />
                    </TouchableOpacity>
                )}
                <View style={styles.search_sub_container}>
                    <TouchableOpacity style={styles.search_icon_container} activeOpacity={1}>
                        <Icon name='search' size={WINDOW_WIDTH * 0.05} style={styles.search_icon} />
                    </TouchableOpacity>
                    <TextInput
                        autoFocus={true}
                        onFocus={() => {
                            setOnSearch(true);
                        }}
                        value={keyword}
                        onChangeText={setKeyword}
                        style={[
                            styles.search_input,
                            (onSearch && !keyword)
                                ? { width: WINDOW_WIDTH * 0.65, borderTopRightRadius: WINDOW_WIDTH * 0.01, borderBottomRightRadius: WINDOW_WIDTH * 0.01 }
                                : onSearch && onFilter
                                    ? { width: WINDOW_WIDTH * 0.7, borderTopRightRadius: WINDOW_WIDTH * 0.01, borderBottomRightRadius: WINDOW_WIDTH * 0.01 }
                                    : onSearch && keyword
                                        ? { width: WINDOW_WIDTH * 0.55 }
                                        : { width: WINDOW_WIDTH * 0.8 }
                        ]}
                        placeholder='Cari paket vavorit kamu ...'
                        placeholderTextColor={TEXT_PLACEHOLDER_COLOR}
                        selectionColor={RED_COLOR}
                        onSubmitEditing={() => {
                            setOnFilter(true);
                        }}
                        editable={onFilter ? false : true}
                    />
                    {keyword && !onFilter && (
                        <TouchableOpacity
                            style={styles.remove_icon_container}
                            activeOpacity={1}
                            onPress={() => {
                                setKeyword('');
                            }}
                        >
                            <Icon name='times' size={WINDOW_WIDTH * 0.05} style={styles.remove_icon} />
                        </TouchableOpacity>
                    )}
                </View>
                {onSearch && !onFilter && (
                    <TouchableOpacity
                        style={styles.cancel_container}
                        activeOpacity={1}
                        onPress={() => {
                            setOnSearch(false);
                            setOnFilter(false);
                            setKeyword('');
                            Keyboard.dismiss();
                            navigation.goBack();
                        }}
                    >
                        <Text style={styles.cancel_text}>Batal</Text>
                    </TouchableOpacity>
                )}
            </View>
            {onSearch && !onFilter && (
                <View style={styles.history_container}>
                    <Text style={styles.history_title}>Terakhir Dicari</Text>
                    <FlatList
                        data={searchHistory}
                        renderItem={({ item }) => getHistoryComponent(item)}
                    />
                </View>
            )}
            {onSearch && !onFilter && (
                <View style={styles.history_container}>
                    <Text style={styles.popular_title}>Pencarian Populer</Text>
                    <View style={styles.popular_list_container}>
                        {searchPopular.map((item: any, index: any) => getPopularComponent(item, index))}
                    </View>
                </View>
            )}
            {onSearch && onFilter && (
                <View style={styles.filter_sort_container}>
                    <View style={styles.filter_sub_sort_container}>
                        <TouchableOpacity
                            style={styles.filter_sort_button}
                            onPress={() => {
                                setFilterModalVisible(true);
                            }}
                        >
                            <Icon name='filter' size={WINDOW_WIDTH * 0.035} color={RED_COLOR} />
                            <Text style={[styles.filter_sort_text, { color: RED_COLOR }]}>Filter</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.filter_sort_button}>
                            <Icon name='sort' size={WINDOW_WIDTH * 0.035} color={BLACK_COLOR} />
                            <Text style={[styles.filter_sort_text, { color: BLACK_COLOR }]}>Urutkan</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView style={{ height: WINDOW_HEIGHT * 0.83 }}>
                        {products.map((product: any, index: any) => {
                            return (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                    isFirst={index == 0 ? true : false} isLast={(index + 1) == products.length ? true : false}
                                />
                            )
                        })}
                    </ScrollView>
                </View>
            )}
            <Filter
                modalFilterVisible={modalFilterVisible}
                setFilterModalVisible={setFilterModalVisible}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    search_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: WINDOW_WIDTH * 0.05,
        backgroundColor: WHITE_COLOR,
    },
    search_conteiner_absolute: {
        paddingVertical: WINDOW_WIDTH * 0.05,
        height: WINDOW_HEIGHT,
        width: WINDOW_WIDTH,
        backgroundColor: WHITE_COLOR
    },
    cancel_filter_container: {
        height: WINDOW_WIDTH * 0.1,
        width:WINDOW_WIDTH * 0.1,
        justifyContent: 'center',
    },
    search_sub_container: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    search_icon_container: {
        padding: WINDOW_WIDTH * 0.02,
        backgroundColor: GREY_COLOR,
        justifyContent: 'center',
        borderTopLeftRadius: WINDOW_WIDTH * 0.01,
        borderBottomLeftRadius: WINDOW_WIDTH * 0.01,
        width: WINDOW_WIDTH * 0.1,
        height: WINDOW_WIDTH * 0.1
    },
    search_icon: {
        color: TEXT_PLACEHOLDER_COLOR,
    },
    search_input: {
        backgroundColor: GREY_COLOR,
        color: BLACK_COLOR,
        height: WINDOW_WIDTH * 0.1
    },
    remove_icon_container: {
        padding: WINDOW_WIDTH * 0.02,
        backgroundColor: GREY_COLOR,
        justifyContent: 'center',
        borderTopRightRadius: WINDOW_WIDTH * 0.01,
        borderBottomRightRadius: WINDOW_WIDTH * 0.01,
        width: WINDOW_WIDTH * 0.1,
        height: WINDOW_WIDTH * 0.1
    },
    remove_icon: {
        color: DARK_GREY_COLOR,
    },
    cancel_container: {
        width: WINDOW_WIDTH * 0.1,
        justifyContent: 'center',
        alignItems: 'center',
        height: WINDOW_WIDTH * 0.1
    },
    cancel_text: {
        color: RED_COLOR,
        fontWeight: 'bold',
        fontSize: WINDOW_WIDTH * 0.04
    },
    history_container: {
        paddingHorizontal: WINDOW_WIDTH * 0.05
    },
    history_title: {
        color: BLACK_COLOR,
        fontSize: WINDOW_WIDTH * 0.04,
        fontWeight: 'bold',
        marginTop: WINDOW_WIDTH * 0.07
    },
    history_item_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: WINDOW_WIDTH * 0.03
    },
    history_item_sub_container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    history_icon: {
        color: BORDER_TEXT_INPUT_COLOR,
        fontSize: WINDOW_WIDTH * 0.05
    },
    history_text: {
        color: DARK_GREY_COLOR,
        marginLeft: WINDOW_WIDTH * 0.02,
        fontSize: WINDOW_WIDTH * 0.04
    },
    popular_title: {
        color: BLACK_COLOR,
        marginTop: WINDOW_WIDTH * 0.07,
        marginBottom: WINDOW_WIDTH * 0.02,
        fontSize: WINDOW_WIDTH * 0.04,
        fontWeight: 'bold',
    },
    popular_list_container: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    popular_item_container: {
        borderWidth: WINDOW_WIDTH * 0.005,
        padding: WINDOW_WIDTH * 0.02,
        borderRadius: WINDOW_WIDTH * 0.05,
        borderColor: RED_COLOR,
        display: 'flex',
        marginRight: WINDOW_WIDTH * 0.02,
        marginBottom: WINDOW_WIDTH * 0.02
    },
    popular_text: {
        color: RED_COLOR
    },
    filter_sort_container: {
        padding: WINDOW_WIDTH * 0.05
    },
    filter_sub_sort_container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: WINDOW_WIDTH * 0.05
    },
    filter_sort_button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: GREY_COLOR,
        marginRight: WINDOW_WIDTH * 0.025,
        padding: WINDOW_WIDTH * 0.025,
        borderRadius: WINDOW_WIDTH * 0.01
    },
    filter_sort_text: {
        fontWeight: 'bold',
        fontSize: WINDOW_WIDTH * 0.045,
        marginLeft: WINDOW_WIDTH * 0.025,
    }
});

export default Search;