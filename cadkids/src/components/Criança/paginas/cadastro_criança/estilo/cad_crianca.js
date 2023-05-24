import { StyleSheet } from "react-native";

export const getStyles = () =>{
    const Styles = StyleSheet.create({
        container: {
            flex           : 1,
            alignItems     : 'center',
            justifyContent : 'flex-start',
        },   

        icone:{
            width       :100,
            height      :100,
            marginTop   :80,
            marginBottom:80
        },
        icone_cadkids:{
            width    :110,
            height   :50,
            marginTop:190,
        },

        
        textinput: {
            backgroundColor: "rgb(255,255,255)",
        }
    });
    return Styles
}