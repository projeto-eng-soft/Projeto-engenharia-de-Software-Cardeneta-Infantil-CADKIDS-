import React from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity, View, Text } from "react-native";


export default function FlatButton({navigation}){
    return(
        <TouchableOpacity onPress={()=>navigation.navigate('Cadastro1')}>
            <View>
                <Text style={Style.text}>Quero me cadastrar</Text>
            </View>
        </TouchableOpacity>
    );
}


const Style = StyleSheet.create({
    text:{
        fontSize:15,
        textDecorationLine:'underline',
        color:'rgb(157, 113, 252)'
    }
})