import { StyleSheet }   from "react-native";
import  plano_de_fundo     from 'static/imagens/plano_de_fundo_padrao.png';

export const getStyles = () => 
{
    const Style = StyleSheet.create({
        container: {
            flex           : 1,
            alignItems     : 'center',
            justifyContent : 'center',
            backgroundImage: `url(${plano_de_fundo})`
        },
        
        container_bairro_rua:{
            flexDirection:'row',
            marginTop:10
        },
    
        formulario_view:{
            backgroundColor:'rgba(221, 222, 239, 0.419)',
            alignItems: 'center',
            width  :350,
            height :540,
            padding:5,
            borderRadius:20,
        },
    
        text:{
            fontSize :16,
            marginTop :10,
            marginLeft:4
        },
    
        text_bairro_rua:{
            fontSize  :17,
            marginLeft:4
        },
    
        textInput_rua:{
            backgroundColor:'white',
            width       :180,
            height      :40,
            paddingLeft :12,
            paddingRight:12, 
            borderRadius:16
        },
        
        textInput_numero:{
            backgroundColor:'white',
            width       :100,
            height      :40,
            paddingLeft :12,
            paddingRight:12, 
            borderRadius:16
        },
    
        textInput:{
            backgroundColor:'white',
            fontSize:14,
            width       :300,
            height      :40 ,
            paddingLeft :12,
            paddingRight:12,        
            borderRadius:16,
        },
    
        button_continua:{
            padding:20,
            borderRadius:20
        }
    })
    return Style;
};