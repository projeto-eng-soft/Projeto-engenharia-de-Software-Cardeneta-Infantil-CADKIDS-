import { StyleSheet }  from "react-native";

export const getStyles = () => 
{

    const Style = StyleSheet.create({
        container: {
            flex           : 1,
            alignItems     : 'center',
            justifyContent : 'flex-start',
        },

        icone:{
            width       :100,
            height      :100,
            marginTop   :100,
            marginBottom:80,
            //backgroundColor:'rgb(255, 255, 255)',
            borderRadius:100,

        },

        icone_cadkids:{
            width    :110,
            height   :50,
            marginTop:100,
            
        },
        
        container_login:{
            backgroundColor:'rgba(255, 255, 255, 0.419)',
            alignItems: 'center',
            width :350,
            height:295,
            padding:5,
            borderRadius:20,

        },
        
        container_icone:{
            position  : 'absolute',
            marginTop : 10,
            marginLeft:265
        },

        text:{
            fontSize :17,
            marginTop:20,
            fontFamily:'Roboto'

        },
    
        textInput:{
            backgroundColor:'rgba(255, 255, 255, 0)',
            fontSize:14,
            width   :290,
            height  :42 ,
            paddingLeft :12,
            paddingRight:12,
            paddingTop  :10,         
            borderRadius:0 , 
            borderBottomWidth:1.5
        },
   
        Button_senha:{
            padding:15
    
        },
    
        button_entrar:{
            marginTop:5,
            borderRadius:20
        },
    
        button_cadastrar:{
           paddingTop:7
        },
        
        button_medico:{
            marginTop:100,
            marginRight:150
        }
    })
    return Style;
};