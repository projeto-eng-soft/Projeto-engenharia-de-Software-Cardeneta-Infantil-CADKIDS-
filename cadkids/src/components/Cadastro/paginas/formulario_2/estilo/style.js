import { StyleSheet }   from "react-native";


export const getStyles = () => 
{
    const Style = StyleSheet.create({
        container: {
            alignItems     : 'center',
            justifyContent : 'flex-start',

        },
        
        container_bairro_rua:{
            flexDirection:'row',
            marginTop:10
        },
    
        formulario_view:{
            backgroundColor:'rgba(221, 222, 239, 0.419)',
            alignItems: 'center',
            width  :350,
            height :580,
            padding:5,
            borderRadius:20,
        },

        icone_logo:{
            width :90,
            height:90,
            marginTop   :40,
            marginBottom:20
        },

        icone_cadkids:{
            width    :110,
            height   :50,
            marginTop:69,
        },
        
        text:{
            fontSize :15,
            marginTop :10,
            marginLeft:4
        },
    
        text_bairro_rua:{
            fontSize  :17,
            marginLeft:4
        },
    
        textInput_rua:{
            backgroundColor:'rgba(255, 255, 255, 0)',
            width       :180,
            height      :40,
            paddingLeft :12,
            paddingRight:12, 
            borderBottomWidth:1.5,
            marginTop:2,
            marginBottom:8
        },
        
        textInput_numero:{
            backgroundColor:'rgba(255, 255, 255, 0)',
            width       :100,
            height      :40,
            paddingLeft :12,
            paddingRight:12, 
            borderBottomWidth:1.5,
            marginTop:2,
            marginBottom:8
        },
    
        textInput:{
            backgroundColor:'rgba(255, 255, 255, 0)',
            fontSize:14,
            width       :300,
            height      :40 ,
            paddingLeft :12,
            paddingRight:12,        
            borderBottomWidth:1.5,
            marginTop:2,
            marginBottom:8
        },
    
        button_continua:{
            padding:15,
            borderRadius:20
        }
    })
    return Style;
};