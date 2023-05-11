import { StyleSheet } from "react-native";
import plano_de_fundo from 'static/imagens/plano_de_fundo_padrao.png';

export const getStyles = () => {
    const Style = StyleSheet.create({
        container: {
            flex           : 1,
            alignItems     : 'center',
            justifyContent : 'flex-start',
            backgroundImage: `url(${plano_de_fundo})`,
        },   
        
        container_crianca:{
            backgroundColor:'yellow',
            width    :350,
            height   :45,
            marginTop:15,
            borderRadius:15
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
