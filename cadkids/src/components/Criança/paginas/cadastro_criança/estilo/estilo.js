import { StyleSheet } from "react-native";

export const getStyles = () =>{
    const Styles = StyleSheet.create({
        container:{
            flex:1,
            alignItems:'center',
            justifyContent: 'center',
        },
        textinput: {
            backgroundColor: "rgb(255,255,255)",
        }
    });
    return Styles
}