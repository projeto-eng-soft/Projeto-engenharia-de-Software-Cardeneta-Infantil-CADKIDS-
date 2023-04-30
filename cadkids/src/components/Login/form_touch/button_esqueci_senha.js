import React from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity, View, Text } from "react-native";


export default function Button(){
    return(
        <TouchableOpacity /*onPress={()=>navigation.navigate('formulario_1')}*/>
            <View>
                <Text style={Style.text}>Esqueceu sua senha?</Text>
            </View>
        </TouchableOpacity>
    );
}


const Style = StyleSheet.create({
    text:{
        textDecorationLine:'underline',
        fontSize:12,
        color:'rgb(31, 138, 239)'
    }
})