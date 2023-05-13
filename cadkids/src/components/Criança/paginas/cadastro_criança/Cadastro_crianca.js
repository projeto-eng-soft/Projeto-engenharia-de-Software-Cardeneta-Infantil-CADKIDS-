import { useState } from "react";
import { View ,Text, TextInput ,ImageBackground } from "react-native";
import { getStyles }    from "./estilo/estilo";
import Button_cadastrar from "./form_touch/button_cadastrar";

const Style = getStyles();

export default function Cadastro_criança({navigation}){

    const [Certidao,setCertidao] = useState(null);

    const Cadastrando_criança = () =>{
        navigation.navigate('home_C')
    }
    
    return(
        <ImageBackground style={Style.container}>
            <View>
                <Text>id</Text>
                <TextInput
                    placeholder ="oi"
                    keyboardType="numeric"
                    style       = {Style.textinput}  
                    value       = {Certidao}
                    onChangeText= {setCertidao}
                />
            </View>
            <View>
                <Button_cadastrar onPress = {Cadastrando_criança} />
            </View>
        </ImageBackground>
    )

}