import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import {BLACK_COLOR, WINDOW_WIDTH} from '../constans';

function TopBar({title}: any) {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.side_container}>
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => navigation.goBack()}>
                    <Icon
                        name="arrow-left"
                        size={WINDOW_WIDTH * 0.05}
                        style={styles.back_icon}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.center_container}>
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.side_container} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: WINDOW_WIDTH * 0.05,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    side_container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: WINDOW_WIDTH * 0.05,
    },
    center_container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    back_icon: {
        color: BLACK_COLOR,
        alignSelf: 'flex-start',
    },
    title: {
        color: BLACK_COLOR,
        fontWeight: 'bold',
        fontSize: WINDOW_WIDTH * 0.05,
    },
});

export default TopBar;
