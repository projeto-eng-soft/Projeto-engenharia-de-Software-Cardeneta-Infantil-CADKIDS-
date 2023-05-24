import { TouchableOpacity , Image } from "react-native";

import { getStyles } from "./estilo/visibilidade_senha";
import Visivel_senha from 'static/icons/icon_olho.png';


export default function Button_senha({onPress}){
    return(
        <TouchableOpacity onPress={onPress}>       
            <Image source={Visivel_senha} style={Style.icone}/>
        </TouchableOpacity>
    );
}
const Style = getStyles();