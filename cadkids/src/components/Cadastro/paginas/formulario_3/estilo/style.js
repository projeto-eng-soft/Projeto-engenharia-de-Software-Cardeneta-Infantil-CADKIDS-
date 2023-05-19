import { StyleSheet }   from "react-native";
import  plano_de_fundo  from 'static/imagens/plano_de_fundo_padrao.png';

export const getStyles = () => 
{
    const Style = StyleSheet.create({
        container: {
            alignItems: 'center',
            justifyContent:'flex-start',
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
            marginTop  :250
        },

        icone_logo:{
            width :100,
            height:100,
            marginTop   :80,
            marginBottom:65
        },
    
        icone_cadkids:{
            width    :110,
            height   :50,
            marginTop:200,
        },

        text:{
            fontSize:16,
            marginTop:15,
            marginLeft:4
        },
        
        textInput:{
            backgroundColor:'rgba(255, 255, 255, 0)',
            fontSize:14,
            width :300,
            height:40 ,
            paddingLeft :12,
            paddingRight:12,        
            borderBottomWidth:1.5,
            marginTop:2
        },
    
        button_continua:{
            padding:20,
            borderRadius:20,
            
        },

        button_medico:{
            marginTop:350,
            marginRight:150 
        }
    })
    return Style;
};