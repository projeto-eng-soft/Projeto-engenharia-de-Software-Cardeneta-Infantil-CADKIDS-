import { StyleSheet }   from "react-native";
import  plano_fundo     from 'static/imagens/fundo_padrao.png';


export const getStyles = () => 
{
    const Style = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundImage: `url(${plano_fundo})`
        },
    
        formulario_view:{
            backgroundColor:'rgba(221, 222, 239, 0.419)',
            alignItems: 'center',
            width :350,
            height:410,
            padding:5,
            borderRadius:10,
        },
    
        text:{
            fontSize:17,
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
            
        }
    })
    return Style;
};