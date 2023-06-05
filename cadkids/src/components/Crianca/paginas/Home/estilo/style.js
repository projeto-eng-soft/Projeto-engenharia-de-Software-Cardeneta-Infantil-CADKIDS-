import { StyleSheet } from "react-native";


export const getStyles = () => {
    const Style = StyleSheet.create({
        container: {
            flex           : 1,
            alignItems     : 'center',
            justifyContent : 'flex-start',

        },   
        

        container_button_menu:{
            marginTop:30,
            marginRight:320,
        },
        
        container_button_adcionar:{
            alignItems:'center'
        },
        
        icone_crianca:{
            width:180,
            height:50,
            marginTop:15,
        },

        text_cadastrar_crianca:{
            marginTop:10
        }
        
    })
    return Style
}
