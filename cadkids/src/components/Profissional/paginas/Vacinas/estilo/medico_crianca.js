import { StyleSheet }  from "react-native";

export const getStyles = () => 
{

    return StyleSheet.create({
        container: {
            flex           : 1,
            alignItems     : 'center',
            justifyContent : 'flex-start',
        },

        icone:{
            width       :85,
            height      :85,
            marginTop   :80,
            marginBottom:20,
            borderRadius:100,
        },

        icone_cadkids:{
            width    :110,
            height   :50,
            marginTop:250,
        },

        scrollview_vacinas:{
            marginTop:20,
            marginBottom:40
        },
        
        containers_vacinas:{
            backgroundColor:'#e6ac84',
            justifyContent :'center',
            alignItems     :"center",
            width :350,
            height:90,
            marginBottom:60,
            borderTopLeftRadius :10,
            borderTopRightRadius:10,
            borderWidth :1.2,
            borderBottomWidth:1.2,

        },
        view_1:{
            flexDirection:'row',
            alignItems:'center',
            marginTop:90
        },
        button_aplicar:{
            position:'absolute',
            backgroundColor:'rgba(221, 251, 229, 0.619)',
            alignItems    :'center',
            justifyContent:'center',
            height:135,
            width :350,
            borderEndWidth   :1.2,
            borderStartWidth :1.2,
            borderBottomWidth:1.2,
            borderRadius     :20
        }



    });
}