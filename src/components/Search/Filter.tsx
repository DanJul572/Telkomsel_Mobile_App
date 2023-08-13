import React, { useEffect, useRef } from 'react';
import { View, Animated, Text, PanResponder, StyleSheet, Modal } from 'react-native';
import { BLACK_COLOR, BORDER_TEXT_INPUT_COLOR, RED_COLOR, WHITE_COLOR, WINDOW_WIDTH } from '../../constans';

function Filter ({modalFilterVisible, setFilterModalVisible}: any) {

    useEffect(() => {
        if (modalFilterVisible) {
            Animated.timing(modalY, {
                toValue: WINDOW_WIDTH,
                duration: 300,
                useNativeDriver: false,
            }).start();
        }
    }, [modalFilterVisible]);

    const closeModal = () => {
        setFilterModalVisible(false);
        Animated.timing(modalY, {
            toValue: WINDOW_WIDTH,
            duration: 300,
            useNativeDriver: false,
        }).start();
    };

    const modalY = useRef(new Animated.Value(WINDOW_WIDTH)).current;

    const gestureResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponder: () => true,
            onPanResponderMove: (_, gestureState) => {
                if (gestureState.dy > 0) {
                    modalY.setValue(WINDOW_WIDTH + gestureState.dy);
                }
            },
            onPanResponderRelease: (_, gestureState) => {
                if (gestureState.dy > WINDOW_WIDTH / 2) {
                    setFilterModalVisible(false);
                } else {
                    Animated.timing(modalY, {
                        toValue: WINDOW_WIDTH,
                        duration: 300,
                        useNativeDriver: false,
                    }).start();
                }
            },
        })
    ).current;

    return (
        <Modal
            animationType='fade'
            transparent
            visible={modalFilterVisible}
            onRequestClose={closeModal}
        >
            <View style={styles.container}>
                <Animated.View
                    style={[styles.sub_container, { transform: [{ translateY: modalY }] }]}
                    {...gestureResponder.panHandlers}
                >
                    <View style={styles.indicator} />
                    <View style={styles.title_container}>
                        <Text style={styles.title_text}>Filter</Text>
                        <Text style={styles.delete_text}>Hapus</Text>
                    </View>
                </Animated.View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    sub_container: {
        flex: 1,
        width: WINDOW_WIDTH,
        height: WINDOW_WIDTH,
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
        borderRadius: WINDOW_WIDTH * 0.05
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
    delete_text: {
        color: RED_COLOR,
        fontWeight: 'bold',
        fontSize: WINDOW_WIDTH * 0.035
    }
});

export default Filter;