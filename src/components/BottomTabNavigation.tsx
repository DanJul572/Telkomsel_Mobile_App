import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { RED_COLOR, WINDOW_WIDTH, DARK_GREY_COLOR, WHITE_COLOR } from '../constans';
import Icon from 'react-native-vector-icons/FontAwesome5';

function BottomTabNavigation({ state, descriptors, navigation }: { state: any, descriptors: any, navigation: any }) {
    return (
        <View style={styles.container}>
            {state.routes.map((route: any, index: any) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const icon = route.name == 'Home' ? 'home'
                            : route.name == 'History' ? 'history'
                            : route.name == 'Help' ? 'question'
                            : route.name == 'Inbox' ? 'envelope'
                            : route.name == 'Account' ? 'user'
                            : 'file';

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate({ name: route.name, merge: true });
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        key={index}
                        activeOpacity={1}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={styles.button_container}
                    >
                        <Icon name={icon} size={WINDOW_WIDTH * 0.05} color={isFocused ? RED_COLOR : DARK_GREY_COLOR}/>
                        <Text style={{ color: isFocused ? RED_COLOR : DARK_GREY_COLOR }}>
                            {label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        padding: WINDOW_WIDTH * 0.05,
        backgroundColor: WHITE_COLOR,
    },
    button_container: {
        width: WINDOW_WIDTH * 0.15,
        height: WINDOW_WIDTH * 0.1,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: WINDOW_WIDTH * 0.01
    }
});


export default BottomTabNavigation;