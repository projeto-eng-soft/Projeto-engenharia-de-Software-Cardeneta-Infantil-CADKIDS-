import { StyleSheet } from "react-native";

export const getStyles = () => {
    const Style = StyleSheet.create({
        text:{
            color:'white',
            fontSize:15,
        },
        view:{
            backgroundColor:'rgb(31, 138, 239)',
            padding     :10,
            paddingLeft :14,
            paddingRight:14,
            borderRadius:10,
        }
    });
    return Style
}