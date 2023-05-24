import { StyleSheet } from "react-native";


export const getStyles = ()=>{
    const Style = StyleSheet.create({
        text:{
            backgroundColor:'rgb(31, 138, 239)',
            color   :'white',
            fontSize:16,
            padding     :10,
            paddingLeft :14,
            paddingRight:14,
            borderRadius:19,
        }
    });
    return Style
}