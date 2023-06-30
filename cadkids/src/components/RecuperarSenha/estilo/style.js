import { StyleSheet }  from "react-native";

export const getStyles = () => 
{

    const Style = StyleSheet.create({
        container: {
            flex           : 1,
            alignItems     : 'center',
            justifyContent : 'flex-start',
        },

        formulario_view:{
            backgroundColor:'rgba(255, 255, 255, 0.450)',
            alignItems: 'center',
            width     :350,
            height    :190,
            borderRadius:20,
            marginTop:50
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
            marginTop:280,
            
        },
        

        text:{
            fontSize :17,
            marginTop:20,

        },
    
        textInput:{
            fontSize:14,
            width :300,
            height:40 ,
            paddingLeft :12,
            paddingRight:12,       
            borderBottomWidth:1.5,
            marginTop:2
        },
    
        button_recuperar:{
            marginTop:30,
            borderRadius:20
        },

    })
    return Style;
};