import { StyleSheet } from "react-native";

export const getStyles = () => {
    const Style = StyleSheet.create({
        text:{
            color:'white',
            fontSize:15,
        },
        view:{
            backgroundColor:'#98acfc',
            padding     :10,
            paddingLeft :14,
            paddingRight:14,
            borderRadius:10,
            marginTop:19
        }
    });
    return Style
}