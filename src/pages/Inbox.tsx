import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {DARK_GREY_COLOR} from '../constans';

function Inbox() {
    return (
        <View style={styles.container}>
            <Text style={{color: DARK_GREY_COLOR}}>Inbox</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Inbox;
