import { StyleSheet } from "react-native";


export const getStyles = () => {
    const Style = StyleSheet.create({
        container: {
            flex           : 1,
            alignItems     : 'center',
            justifyContent : 'flex-start',

        },   
        container_opcoes:{
            marginTop :50,
        },        
        container_button_menu:{
            marginTop:30,
            marginRight:320,
        },

        button_opcoes:{
            backgroundColor:'rgb(0, 132, 255)',
            alignItems:'center',
            width:350,
            padding:10,
            marginBottom:20,
            borderRadius:10,

        },
        
        text:{
            color:'rgb(255, 255, 255)',
            fontSize:20,
        },

        text_nome_usuario:{
            fontSize:25,
        }
        


        
    })
    return Style
}
