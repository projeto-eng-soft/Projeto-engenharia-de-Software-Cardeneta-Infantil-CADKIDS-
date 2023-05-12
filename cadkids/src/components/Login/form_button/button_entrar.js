import {StyleSheet, TouchableOpacity, View, Text } from "react-native";


const Button_entrar = ({onPress}) =>
{
    return(
        <TouchableOpacity onPress={onPress}>
            <View >
                <Text style={Style.text}>Entrar</Text>
            </View>
        </TouchableOpacity>
    );
}
export default Button_entrar


const Style = StyleSheet.create({
    text:{
        backgroundColor:'rgb(31, 138, 239)',
        color:'white',
        fontSize   :16,
        padding    :10,
        paddingLeft:14,
        paddingRight:14,
        borderRadius:19,
    
    }
})