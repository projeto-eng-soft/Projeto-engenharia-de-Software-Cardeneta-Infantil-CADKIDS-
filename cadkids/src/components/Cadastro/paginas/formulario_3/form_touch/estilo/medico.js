import { StyleSheet } from "react-native";

export const getStyles = () => {
    const Style = StyleSheet.create({
        conteiner:{
            width:230
        },
        
        icone: {
            position:'absolute',
            width :44,
            height:44
        },
    
        texto:{
            backgroundColor   :'rgb(255, 228, 92)',
            fontSize  :10,
            fontStyle :'italic',
            position  :'absolute',
            marginTop    :14,
            marginLeft   :33,
            paddingTop   :3,
            paddingBottom:3,
            paddingRight :9,
            paddingLeft  :14,
            borderTopRightRadius   :13,
            borderBottomRightRadius:13,
        }
    })
    return Style
}