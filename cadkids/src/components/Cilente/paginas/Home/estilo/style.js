import { StyleSheet } from "react-native";


export const getStyles = () => {
    const Style = StyleSheet.create({
        container: {
            flex           : 1,
            alignItems     : 'center',
            justifyContent : 'flex-start',
            resizeMode:'center'

        },   
        

        container_button_menu:{
            marginTop:30,
            marginRight:320,
            backgroundColor:'white',
            borderRadius:20,
            borderWidth:1.2
        },

        conteiner_nome_crianca:{
            marginTop:10
        },

        container_button_adcionar:{
            alignItems:'center'
        },

        scrollview:{
            marginTop:50,
        },
        
        icone_crianca:{
            width:180,
            height:50,
            marginTop:15,
        },

        text_cadastrar_crianca:{
            marginTop:10,
           
        }
        
    })
    return Style
}
