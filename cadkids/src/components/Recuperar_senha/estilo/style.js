import { StyleSheet }  from "react-native";

export const getStyles = () => 
{
    const Style = StyleSheet.create({
        container: {
            flex           : 1,
            alignItems     : 'center',
            justifyContent : 'center',
        },
        icone:{
            width :50,
            height:50
        }
    });
    return Style;
}