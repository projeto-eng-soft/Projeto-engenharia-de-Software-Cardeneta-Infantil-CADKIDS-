import { TouchableOpacity, Image, StyleSheet } from "react-native";
import icon_adcionar_crianca from 'static/icons/icon_adcionar_criança.png'

export default function Button_cadastrar_crianca({navigation}){
    return(
        <TouchableOpacity onPress={()=>navigation.navigate('Cadastro_Crianca')}>
            <Image source={icon_adcionar_crianca} style={Style.icone}/>
        </TouchableOpacity>
    );
}

const Style = StyleSheet.create({
    icone:{
        width:45,
        height:45,
    }

})