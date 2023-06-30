import { StyleSheet } from "react-native";

export const getStyles = () => {
    const Style = StyleSheet.create({
        text:{
            color:'rgb(31, 138, 239)',
            textDecorationLine:'underline',
            fontSize:12,
        }
    });
    return Style
}