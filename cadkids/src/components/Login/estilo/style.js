import { StyleSheet }   from "react-native";
import  plano_fundo     from 'static/img/fundo_padrao.png';

export const getStyles = () => 
{
    const Style = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundImage: `url(${plano_fundo})`
        },
        
        container_login:{
            backgroundColor:'rgba(149, 196, 241, 0.326)',
            alignItems: 'center',
            width :350,
            height:285,
            padding:5,
            borderRadius:10,
        },
    
        text:{
            fontSize:17,
            paddingTop:15
        },
    
        textInput:{
            backgroundColor:'white',
            fontSize:14,
            width :290,
            height:42 ,
            paddingLeft :12,
            paddingRight:12,        
            borderRadius:16,
        },
    
        Button_senha:{
            padding:15
    
        },
    
        button_entrar:{
            padding:5,
            borderRadius:20
        },
    
        button_cadastrar:{
           paddingTop:7
        }
    })
    return Style;
};