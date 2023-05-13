import { StyleSheet , TouchableOpacity ,Image } from "react-native";

import Visivel_senha from 'static/icons/icon_olho.png';


export default function Button_senha({onPress}){
    return(
        <TouchableOpacity onPress={onPress}>       
            <Image source={Visivel_senha} style={Style.icone}/>
        </TouchableOpacity>
    );
}

const Style = StyleSheet.create({
    icone:{
        width :25,
        height:25,
    }
})