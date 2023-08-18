import React from 'react';
import {View, TouchableOpacity, StyleSheet, TextInput} from 'react-native';
import {
    BLACK_COLOR,
    GREY_COLOR,
    TEXT_PLACEHOLDER_COLOR,
    WINDOW_WIDTH,
} from '../../constans';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';

function FakeInput() {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            style={styles.search_sub_container}
            activeOpacity={1}
            onPress={() => {
                navigation.navigate('Search' as never);
            }}>
            <View style={styles.search_icon_container}>
                <Icon
                    name="search"
                    size={WINDOW_WIDTH * 0.05}
                    style={styles.search_icon}
                />
            </View>
            <TextInput
                style={[styles.search_input, {width: WINDOW_WIDTH * 0.8}]}
                placeholder="Cari paket vavorit kamu ..."
                placeholderTextColor={TEXT_PLACEHOLDER_COLOR}
                editable={false}
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    search_sub_container: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    search_icon_container: {
        padding: WINDOW_WIDTH * 0.02,
        backgroundColor: GREY_COLOR,
        justifyContent: 'center',
        borderTopLeftRadius: WINDOW_WIDTH * 0.01,
        borderBottomLeftRadius: WINDOW_WIDTH * 0.01,
        width: WINDOW_WIDTH * 0.1,
        height: WINDOW_WIDTH * 0.1,
    },
    search_icon: {
        color: TEXT_PLACEHOLDER_COLOR,
    },
    search_input: {
        backgroundColor: GREY_COLOR,
        color: BLACK_COLOR,
        height: WINDOW_WIDTH * 0.1,
    },
});

export default FakeInput;
