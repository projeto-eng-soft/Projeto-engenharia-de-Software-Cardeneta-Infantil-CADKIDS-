import { StyleSheet } from "react-native";


export const getStyles = () => {
    const Style = StyleSheet.create({
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
            borderWidth:1.4
        },

        container_nome_usuario:{
            backgroundColor:'rgba(255, 255, 255,0.900)',
            justifyContent :'center',
            width:400,
            marginTop:150,
            marginRight:25,
            borderBottomWidth:1.3,
        },

        button_opcoes:{
            backgroundColor:'#228dff',
            alignItems:'center',
            width:350,
            padding:10,
            marginBottom:20,
            borderRadius:10,
            borderWidth:1.2,
        },
        
        text:{
            color:'rgb(255, 255, 255)',
            fontSize:20,
        },

        text_nome_usuario:{
            fontSize:29,
            marginLeft:20
        }
        


        
    })
    return Style
}
