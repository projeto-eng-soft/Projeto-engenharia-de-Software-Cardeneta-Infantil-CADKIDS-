import { StyleSheet }   from "react-native";



export const getStyles = () => 
{
    const Style = StyleSheet.create({
        container: {
            alignItems: 'center',
            justifyContent: 'flex-start',

        },
    
        formulario_view:{
            backgroundColor:'rgba(221, 222, 239, 0.519)',
            alignItems: 'center',
            width     :350,
            height    :435,
            borderRadius:20,
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
            marginTop:120,
        },

        text:{
            fontSize:15,
            marginTop:20,
            marginLeft:4,
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
            marginTop:25,
            borderRadius:20
            
        }
    })
    return Style;
};