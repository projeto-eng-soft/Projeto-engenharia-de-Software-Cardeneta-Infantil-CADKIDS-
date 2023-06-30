import { TouchableOpacity , Image } from "react-native";

import { getStyles } from "./estilo/menu";
import  icon_menu    from 'static/icons/icon_menu.png';

export default function Button_menu({onPress}){
    return(
        <TouchableOpacity onPress={onPress}>
            <Image source={icon_menu} style={Style.icone_menu}/>
        </TouchableOpacity>
    );
}

const Style = getStyles();