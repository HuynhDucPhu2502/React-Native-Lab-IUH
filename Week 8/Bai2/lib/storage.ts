import AsyncStorage from "@react-native-async-storage/async-storage";
export const getName = () => AsyncStorage.getItem("user:name");
export const setName = (v: string) => AsyncStorage.setItem("user:name", v);
export const clearName = () => AsyncStorage.removeItem("user:name");
