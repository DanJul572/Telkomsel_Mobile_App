import React, {useEffect, useRef, useState} from 'react';
import {
    View,
    Animated,
    Text,
    PanResponder,
    StyleSheet,
    Modal,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
    BLACK_COLOR,
    BLACK_TRANSPARENT_COLOR,
    BORDER_TEXT_INPUT_COLOR,
    RED_COLOR,
    WHITE_COLOR,
    WINDOW_WIDTH,
} from '../../constans';
import sorts from '../../dummy/sorts.json';

function Sort({sortModalVisible, setSortModalVisible}: any) {
    const container_height = WINDOW_WIDTH * 0.85;
    const modalY = useRef(new Animated.Value(container_height)).current;

    const [activeSort, setActiveSort] = useState(-1);

    useEffect(() => {
        if (sortModalVisible) {
            Animated.timing(modalY, {
                toValue: container_height,
                duration: 300,
                useNativeDriver: false,
            }).start();
        }
    }, [container_height, sortModalVisible, modalY]);

    const closeModal = () => {
        setSortModalVisible(false);
        Animated.timing(modalY, {
            toValue: container_height,
            duration: 300,
            useNativeDriver: false,
        }).start();
    };

    const gestureResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponder: () => true,
            onPanResponderMove: (_, gestureState) => {
                if (gestureState.dy > 0) {
                    modalY.setValue(container_height + gestureState.dy);
                }
            },
            onPanResponderRelease: (_, gestureState) => {
                if (gestureState.dy > container_height / 2) {
                    setSortModalVisible(false);
                } else {
                    Animated.timing(modalY, {
                        toValue: container_height,
                        duration: 300,
                        useNativeDriver: false,
                    }).start();
                }
            },
        }),
    ).current;

    return (
        <Modal
            animationType="fade"
            transparent
            visible={sortModalVisible}
            onRequestClose={closeModal}>
            <View style={styles.container}>
                <Animated.View
                    style={[
                        styles.sub_container,
                        {transform: [{translateY: modalY}]},
                    ]}>
                    <View {...gestureResponder.panHandlers}>
                        <View style={styles.indicator} />
                        <View style={styles.title_container}>
                            <Text style={styles.title_text}>Urutkan</Text>
                        </View>
                    </View>
                    <View style={{height: WINDOW_WIDTH * 0.73}}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            {sorts.map((item, index) => {
                                return (
                                    <TouchableOpacity
                                        activeOpacity={1}
                                        key={index}
                                        style={styles.sort_item_container}
                                        onPress={() => setActiveSort(index)}>
                                        <Text style={styles.sort_item_text}>
                                            {item}
                                        </Text>
                                        {index === activeSort && (
                                            <Icon
                                                name="check"
                                                size={WINDOW_WIDTH * 0.05}
                                                color={RED_COLOR}
                                            />
                                        )}
                                    </TouchableOpacity>
                                );
                            })}
                        </ScrollView>
                    </View>
                    <View style={styles.sort_button_container}>
                        <TouchableOpacity
                            activeOpacity={1}
                            style={styles.sort_sub_button_container}>
                            <Text style={styles.sort_sub_button_text}>
                                SIMPAN
                            </Text>
                        </TouchableOpacity>
                    </View>
                </Animated.View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BLACK_TRANSPARENT_COLOR,
    },
    sub_container: {
        flex: 1,
        backgroundColor: WHITE_COLOR,
        borderTopLeftRadius: WINDOW_WIDTH * 0.05,
        borderTopRightRadius: WINDOW_WIDTH * 0.05,
    },
    indicator: {
        alignSelf: 'center',
        marginTop: WINDOW_WIDTH * 0.015,
        height: WINDOW_WIDTH * 0.02,
        width: WINDOW_WIDTH * 0.2,
        backgroundColor: BORDER_TEXT_INPUT_COLOR,
        borderRadius: WINDOW_WIDTH * 0.05,
    },
    title_container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: WINDOW_WIDTH * 0.0025,
        borderColor: BORDER_TEXT_INPUT_COLOR,
        padding: WINDOW_WIDTH * 0.05,
    },
    title_text: {
        color: BLACK_COLOR,
        fontSize: WINDOW_WIDTH * 0.05,
        fontWeight: 'bold',
    },
    sort_item_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: WINDOW_WIDTH * 0.035,
        borderBottomWidth: WINDOW_WIDTH * 0.0025,
        borderBottomColor: BORDER_TEXT_INPUT_COLOR,
        height: WINDOW_WIDTH * 0.15,
    },
    sort_item_text: {
        color: BLACK_COLOR,
        fontSize: WINDOW_WIDTH * 0.04,
    },
    sort_button_container: {
        paddingHorizontal: WINDOW_WIDTH * 0.05,
        height: WINDOW_WIDTH * 0.25,
        justifyContent: 'center',
    },
    sort_sub_button_container: {
        backgroundColor: RED_COLOR,
        padding: WINDOW_WIDTH * 0.05,
        borderRadius: WINDOW_WIDTH * 0.015,
        alignItems: 'center',
    },
    sort_sub_button_text: {
        fontWeight: 'bold',
        color: WHITE_COLOR,
        fontSize: WINDOW_WIDTH * 0.035,
    },
});

export default Sort;
