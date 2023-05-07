import { StyleSheet, TouchableOpacity, View, Text } from "react-native";


export default function Button({onPress}){
    return(
        <TouchableOpacity onPress={onPress}>
            <View>
                <Text style={Style.text}>Esqueceu sua senha?</Text>
            </View>
        </TouchableOpacity>
    );
}


const Style = StyleSheet.create({
    text:{
        color:'rgb(31, 138, 239)',
        textDecorationLine:'underline',
        fontSize:12,
    }
})