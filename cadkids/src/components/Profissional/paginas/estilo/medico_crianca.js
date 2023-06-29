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
            width       :100,
            height      :100,
            marginTop   :100,
            marginBottom:80,
            borderRadius:100,
        },

        icone_cadkids:{
            width    :110,
            height   :50,
            marginTop:280,
        },
    });
}