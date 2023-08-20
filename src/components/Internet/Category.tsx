import React from 'react';
import {View, Text, StyleSheet, FlatList, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
    BLACK_COLOR,
    RED_COLOR,
    WHITE_COLOR,
    WINDOW_WIDTH,
} from '../../constans';
import categories from '../../dummy/categories.json';

function Category() {
    const getMarginContent = (index: any) => {
        if (index % 9 === 1) {
            return {marginLeft: WINDOW_WIDTH * 0.05};
        } else if (index % 9 === 0) {
            return {marginRight: WINDOW_WIDTH * 0.05};
        }
    };
    return (
        <View>
            <View style={styles.title_container}>
                <Text style={styles.title_text}>Kategori</Text>
                <Text style={styles.title_button}>Lihat Semua</Text>
            </View>
            <ScrollView
                horizontal
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}>
                <FlatList
                    scrollEnabled={false}
                    showsHorizontalScrollIndicator={false}
                    data={categories}
                    numColumns={9}
                    renderItem={({item, index}: any) => {
                        return (
                            <LinearGradient
                                colors={['#E52D27', '#B31217']}
                                start={{x: 0, y: 0}}
                                end={{x: 1, y: 0}}
                                style={[
                                    styles.card_container,
                                    getMarginContent(index + 1),
                                ]}>
                                <Text style={styles.card_text}>{item}</Text>
                            </LinearGradient>
                        );
                    }}
                />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    title_container: {
        marginTop: WINDOW_WIDTH * 0.065,
        marginBottom: WINDOW_WIDTH * 0.025,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title_text: {
        color: BLACK_COLOR,
        fontWeight: 'bold',
        fontSize: WINDOW_WIDTH * 0.05,
        marginLeft: WINDOW_WIDTH * 0.05,
    },
    title_button: {
        color: RED_COLOR,
        fontSize: WINDOW_WIDTH * 0.04,
        marginRight: WINDOW_WIDTH * 0.05,
        fontWeight: 'bold',
    },
    card_container: {
        marginRight: WINDOW_WIDTH * 0.025,
        marginBottom: WINDOW_WIDTH * 0.025,
        width: WINDOW_WIDTH * 0.35,
        height: WINDOW_WIDTH * 0.15,
        padding: WINDOW_WIDTH * 0.025,
        borderRadius: WINDOW_WIDTH * 0.015,
        overflow: 'hidden',
    },
    card_text: {
        fontSize: WINDOW_WIDTH * 0.045,
        color: WHITE_COLOR,
    },
});

export default Category;
