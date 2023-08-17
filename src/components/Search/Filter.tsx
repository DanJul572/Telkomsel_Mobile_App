import React, { useEffect, useRef, useState } from 'react';
import { View, Animated, Text, PanResponder, StyleSheet, Modal, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { BLACK_COLOR, BLACK_TRANSPARENT_COLOR, BORDER_TEXT_INPUT_COLOR, DARK_GREY_COLOR, GREY_COLOR, RED_COLOR, WHITE_COLOR, WINDOW_HEIGHT, WINDOW_WIDTH } from '../../constans';
import priceRange from '../../dummy/priceRange.json';
import categories from '../../dummy/categories.json';
import expired from '../../dummy/expired.json';

function Filter ({modalFilterVisible, setFilterModalVisible}: any) {

    const container_height = WINDOW_WIDTH * 0.576;

    const [activeCategory, setActiveCategory] = useState(null);
    const [activeExpired, setActiveExpired] = useState(null);

    useEffect(() => {
        if (modalFilterVisible) {
            Animated.timing(modalY, {
                toValue: container_height,
                duration: 300,
                useNativeDriver: false,
            }).start();
        }
    }, [modalFilterVisible]);

    const closeModal = () => {
        setFilterModalVisible(false);
        Animated.timing(modalY, {
            toValue: container_height,
            duration: 300,
            useNativeDriver: false,
        }).start();
    };

    const modalY = useRef(new Animated.Value(container_height)).current;

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
                    setFilterModalVisible(false);
                } else {
                    Animated.timing(modalY, {
                        toValue: container_height,
                        duration: 300,
                        useNativeDriver: false,
                    }).start();
                }
            },
        })
    ).current;

    const getContainerStyle = (item: any) => {
        let arr = [];

        if (item.isFirst) {
            arr.push({ marginLeft: WINDOW_WIDTH * 0.05, marginRight: WINDOW_WIDTH * 0.025 });
        } else if (item.isLast) {
            arr.push({marginRight: WINDOW_WIDTH * 0.05});
        } else {
            arr.push({marginRight: WINDOW_WIDTH * 0.025});
        }

        if (item.isExpired) {
            if (item.index == activeExpired) {
                arr.push(styles.category_and_expired_container_active);
            } else {
                arr.push(styles.category_and_expired_container)
            }
        } else {
            if (item.index == activeCategory) {
                arr.push(styles.category_and_expired_container_active);
            } else {
                arr.push(styles.category_and_expired_container)
            }
        }

        return arr;
    }

    const getExpiredAndCategoryContent = (item: any) => {
        return (
            <TouchableOpacity
                key={item.index}
                activeOpacity={1}
                style={getContainerStyle(item)}
                onPress={() => item.isExpired ? setActiveExpired(item.index) : setActiveCategory(item.index)}
            >
                {item.isExpired && (
                    <Icon
                        name='hourglass-half'
                        size={WINDOW_WIDTH * 0.03}
                        color={item.index == (item.isExpired ? activeExpired : activeCategory) ? RED_COLOR : BLACK_COLOR}
                        style={{ marginRight: WINDOW_WIDTH * 0.015 }}
                    />
                )}
                <Text style={item.index == (item.isExpired ? activeExpired : activeCategory) ? styles.category_and_expired_text_active : styles.category_and_expired_text}>
                    {item.name}
                </Text>
            </TouchableOpacity>
        )
    }

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
                >
                    <View {...gestureResponder.panHandlers}>
                        <View style={styles.indicator} />
                        <View style={styles.title_container}>
                            <Text style={styles.title_text}>Filter</Text>
                            <Text style={styles.delete_text}>Hapus</Text>
                        </View>
                    </View>
                    <View style={{ height: WINDOW_WIDTH }}>
                        <ScrollView
                            showsVerticalScrollIndicator={false}
                        >
                            <View style={styles.price_container}>
                                <Text style={styles.price_title}>Kisaran Harga</Text>
                                <View style={styles.price_sub_container}>
                                    <View style={styles.price_content}>
                                        <Text style={styles.price_label}>Minimal</Text>
                                        <TextInput
                                            style={styles.price_input}
                                            placeholderTextColor={BLACK_COLOR}
                                            placeholder='Rp0'
                                            selectionColor={RED_COLOR}
                                        />
                                    </View>
                                    <View style={styles.price_content}>
                                        <Text style={styles.price_label}>Maksimal</Text>
                                        <TextInput
                                            style={styles.price_input}
                                            placeholderTextColor={BLACK_COLOR}
                                            placeholder='Rp250.000'
                                            selectionColor={RED_COLOR}
                                        />
                                    </View>
                                </View>
                                <Slider
                                value={125000}
                                    style={styles.price_slider}
                                    minimumValue={0}
                                    maximumValue={250000}
                                    minimumTrackTintColor={RED_COLOR}
                                    maximumTrackTintColor={GREY_COLOR}
                                    thumbTintColor={RED_COLOR}
                                />
                            </View>
                            <View>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    {priceRange.map((item, index) => (
                                        <View
                                            key={index}
                                            style={[
                                                styles.price_range_content,
                                                index == 0
                                                ? { marginLeft: WINDOW_WIDTH * 0.05, marginRight: WINDOW_WIDTH * 0.025 }
                                                    : index + 1 == priceRange.length
                                                    ? { marginRight: WINDOW_WIDTH * 0.05 }
                                                : { marginRight: WINDOW_WIDTH * 0.025 }
                                            ]}
                                        >
                                            <Text style={styles.price_range_text}>
                                                {item}
                                            </Text>
                                        </View>
                                    ))}
                                </ScrollView>
                            </View>
                            <View style={styles.category_container}>
                                <View style={styles.category_head_container}>
                                    <Text style={styles.category_title}>Kategori</Text>
                                    <Text style={styles.category_button}>Lihat Semua</Text>
                                </View>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    {categories.map((item, index) => {
                                        let data = {
                                            name: item,
                                            index: index,
                                            active: index == 2 ? true : false,
                                            isFirst: index == 0 ? true : false,
                                            isLast: index + 1 == categories.length ? true : false
                                        }
                                        return getExpiredAndCategoryContent(data);
                                    })}
                                </ScrollView>
                            </View>
                            <View style={styles.category_container}>
                                <View style={styles.category_head_container}>
                                    <Text style={styles.category_title}>Masa Aktif</Text>
                                </View>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    {expired.map((item, index) => {
                                        let data = {
                                            name: item,
                                            index: index,
                                            active: index == 2 ? true : false,
                                            isFirst: index == 0 ? true : false,
                                            isLast: index + 1 == expired.length ? true : false,
                                            isExpired: true,
                                        }
                                        return getExpiredAndCategoryContent(data);
                                    })}
                                </ScrollView>
                            </View>
                        </ScrollView>
                    </View>
                    <View style={styles.filter_button_container}>
                        <TouchableOpacity
                            activeOpacity={1}
                            style={styles.filter_sub_button_container}
                        >
                            <Text style={styles.filter_sub_button_text}>PASANG FILTER</Text>
                        </TouchableOpacity>
                    </View>
                </Animated.View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BLACK_TRANSPARENT_COLOR
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
    },
    price_container: {
        padding: WINDOW_WIDTH * 0.05
    },
    price_sub_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: WINDOW_WIDTH * 0.025,
    },
    price_content: {
        marginTop: WINDOW_WIDTH * 0.025,
        width: WINDOW_WIDTH * 0.425
    },
    price_title: {
        color: BLACK_COLOR,
        fontSize: WINDOW_WIDTH * 0.04,
        fontWeight: 'bold'
    },
    price_label: {
        color: DARK_GREY_COLOR,
        fontSize: WINDOW_WIDTH * 0.04,
        fontWeight: '100'
    },
    price_input: {
        marginTop: WINDOW_WIDTH * 0.025,
        backgroundColor: WHITE_COLOR,
        borderColor: BORDER_TEXT_INPUT_COLOR,
        borderWidth: WINDOW_WIDTH * 0.0025,
        borderRadius: WINDOW_WIDTH * 0.015,
        fontWeight: 'bold',
        padding: WINDOW_WIDTH * 0.025,
        color: BLACK_COLOR,
        width: '100%'
    },
    price_slider: {
        width: '100%',
        marginTop: WINDOW_WIDTH * 0.025
    },
    price_range_content: {
        backgroundColor: GREY_COLOR,
        padding: WINDOW_WIDTH * 0.025,
        borderRadius: WINDOW_WIDTH * 0.05
    },
    price_range_text: {
        color: BLACK_COLOR,
        fontSize: WINDOW_WIDTH * 0.035,
        fontWeight: 'bold'        
    },
    category_container: {
        marginTop: WINDOW_WIDTH * 0.025
    },
    category_head_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: WINDOW_WIDTH * 0.05
    },
    category_title: {
        color: BLACK_COLOR,
        fontSize: WINDOW_WIDTH * 0.045,
        fontWeight: 'bold'
    },
    category_button: {
        color: RED_COLOR,
        fontSize: WINDOW_WIDTH * 0.035,
        fontWeight: 'bold'
    },
    category_and_expired_container: {
        backgroundColor: GREY_COLOR,
        padding: WINDOW_WIDTH * 0.025,
        borderRadius: WINDOW_WIDTH * 0.05,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    category_and_expired_container_active: {
        backgroundColor: 'rgba(236, 32, 40, 0.2)',
        padding: WINDOW_WIDTH * 0.025,
        borderRadius: WINDOW_WIDTH * 0.05,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    category_and_expired_text: {
        color: BLACK_COLOR,
        fontSize: WINDOW_WIDTH * 0.045
    },
    category_and_expired_text_active: {
        color: RED_COLOR,
        fontSize: WINDOW_WIDTH * 0.045
    },
    filter_button_container: {
        paddingHorizontal: WINDOW_WIDTH * 0.05,
        backgroundColor: WHITE_COLOR,
        height: WINDOW_WIDTH * 0.25,
        justifyContent: 'center',
    },
    filter_sub_button_container: {
        backgroundColor: RED_COLOR,
        padding: WINDOW_WIDTH * 0.05,
        borderRadius: WINDOW_WIDTH * 0.015,
        alignItems: 'center'
    },
    filter_sub_button_text: {
        fontWeight: 'bold',
        color: WHITE_COLOR,
        fontSize: WINDOW_WIDTH * 0.035
    }
});

export default Filter;