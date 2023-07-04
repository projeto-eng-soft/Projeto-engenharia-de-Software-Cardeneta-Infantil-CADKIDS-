import { StyleSheet } from "react-native";


export const getStyles = () => {
    return StyleSheet.create({
        container: {
            flex           : 1,
            alignItems     : 'center',
            justifyContent : 'flex-start',

        },
           
        container_opcoes:{
            marginTop :40,
        },        
        
        container_button_menu:{
            marginTop:30,
            marginRight:320,
            backgroundColor:'white',
            borderRadius:20,
            borderWidth:1.2
        },

        container_nome_usuario:{
            alignItems:'center',
            width:400,
            marginTop:150,


        },

        button_opcoes:{
            backgroundColor:'#1299e7',
            alignItems:'center',
            width:350,
            padding:10,
            marginBottom:20,
            borderRadius:10,
        },
        
        text:{
            color:'rgb(255, 255, 255)',
            fontSize:19,
        },

        text_nome_usuario:{
            fontSize:30,
        }
          
    })
}
