import { StyleSheet }   from "react-native";
import  plano_de_fundo  from 'static/imagens/plano_de_fundo_padrao.png';

export const getStyles = () => 
{
    const Style = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundImage: `url(${plano_de_fundo})`
        },
    
        formulario_view:{
            backgroundColor:'rgba(221, 222, 239, 0.419)',
            alignItems: 'center',
            width :350,
            height:330,
            padding:5,
            position:'absolute',
            borderRadius:20,
        },
    
        text:{
            fontSize:16,
            marginTop:15,
            marginLeft:4
        },
        
        textInput:{
            backgroundColor:'white',
            fontSize:14,
            width :300,
            height:40 ,
            paddingLeft :12,
            paddingRight:12,        
            borderRadius:16,
        },
        button_continua:{
            padding:20,
            borderRadius:20
            
        },

    })
    return Style;
};