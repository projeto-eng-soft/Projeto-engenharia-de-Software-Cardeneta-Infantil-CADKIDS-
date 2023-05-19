import {StyleSheet, TouchableOpacity, View, Text } from "react-native";


const Button_entrar = ({onPress}) =>
{
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={Style.view}>
                <Text style={Style.text}>Entrar</Text>
            </View>
        </TouchableOpacity>
    );
}
export default Button_entrar


const Style = StyleSheet.create({
    text:{
        color   :'white',
        fontSize:16,
    },
    view:{
        backgroundColor:'rgb(31, 138, 239)',
        padding     :10,
        paddingLeft :14,
        paddingRight:14,
        borderRadius:15,
    }
})