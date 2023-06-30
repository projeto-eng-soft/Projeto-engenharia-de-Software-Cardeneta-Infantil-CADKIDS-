import { StyleSheet }   from "react-native";



export const getStyles = () => 
{
    const Style = StyleSheet.create({
        container: {
            alignItems: 'center',
            justifyContent: 'flex-start',

        },

        container_bairro_rua:{
            flexDirection:'row',
            marginTop:10
        },

        formulario_view:{
            backgroundColor:'rgba(255, 255, 255, 0.450)',
            alignItems: 'center',
            borderRadius:20,
        },

        icone_logo:{
            width :100,
            height:100,
            marginTop   :80,
            marginBottom:60
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
    
        button_edit:{
            marginTop:25,
            borderRadius:20   
        },

    })
    return Style;
};