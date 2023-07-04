import { StyleSheet } from "react-native";

export const getStyles = () =>{
    const Styles = StyleSheet.create({
        container: {
            flex           : 1,
            alignItems     : 'center',
            justifyContent : 'flex-start',
        },   
        formulario_view:{
            backgroundColor:'rgba(255, 255, 255, 0.450)',
            alignItems: 'center',
            width     :370,
            height    :355,
            borderRadius:20,
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
        
        text:{
            fontSize:16,
            marginTop:20,
        },

        textInput:{
            backgroundColor:'rgba(255, 255, 255, 0)',
            fontSize:15,
            width :330,
            height:40 ,
            paddingLeft :10,
            paddingRight:10,       
            borderBottomWidth:1.5,
            marginTop:2
        },
        button_criar:{
            marginTop:30,
        }
    });
    return Styles
}