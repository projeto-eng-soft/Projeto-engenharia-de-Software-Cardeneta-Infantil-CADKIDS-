import { StyleSheet }   from "react-native";

export const getStyles = () => 
{
    const Style = StyleSheet.create({
        container: {
            alignItems: 'center',
            justifyContent: 'flex-start',
        },
    
        formulario_view:{
            backgroundColor:'rgba(255, 255, 255,0.450)',
            alignItems: 'center',
            width :350,
            height:330,
            padding:5,
            borderRadius:20,
            marginTop  :40
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
            marginTop:190
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
            borderRadius:10
            
        },

    })
    return Style;
};