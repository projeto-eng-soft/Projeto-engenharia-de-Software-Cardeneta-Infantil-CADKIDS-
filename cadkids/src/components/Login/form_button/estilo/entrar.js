import { StyleSheet } from "react-native";

export const getStyles = () => {
    const Style = StyleSheet.create({
        text:{
            color   :'white',
            fontSize:16,
        },
        view:{
            alignItems:'center',
            backgroundColor:'rgb(31, 138, 239)',
            padding     :10,
            borderRadius:15,
        }
    });
    return Style
}