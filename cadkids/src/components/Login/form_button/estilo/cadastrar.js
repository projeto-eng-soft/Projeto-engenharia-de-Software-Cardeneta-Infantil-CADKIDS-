import { StyleSheet } from "react-native";

export const getStyles = () => {
    const Style = StyleSheet.create({
        text:{
            textDecorationLine:'underline',
            color   :'rgb(245, 14, 222)',
            fontSize:14,
    
        }
    });
    return Style
}