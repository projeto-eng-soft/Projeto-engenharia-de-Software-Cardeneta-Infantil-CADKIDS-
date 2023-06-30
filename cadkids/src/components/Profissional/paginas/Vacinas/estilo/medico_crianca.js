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
            marginBottom:80,
            borderRadius:100,
        },

        icone_cadkids:{
            width    :110,
            height   :50,
            marginTop:280,
        },

        scrollview_vacinas:{
            marginTop:50,
            marginBottom:40
        },
        
        containers_vacinas:{
            backgroundColor:'rgba(119, 255, 162, 0.98)',
            justifyContent :'center',            
            width:350,
            height:70,
            paddingLeft :10,
            marginBottom:15,
            borderRadius:10,
            borderWidth:1.2
        },

    });
}