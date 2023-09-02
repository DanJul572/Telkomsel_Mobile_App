import AsyncStorage from '@react-native-async-storage/async-storage';

const checkUser = async () => {
    return (await AsyncStorage.getItem('user')) ? true : false;
};

export {checkUser};
