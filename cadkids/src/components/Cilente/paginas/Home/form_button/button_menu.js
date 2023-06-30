import { StyleSheet , TouchableOpacity , Image } from "react-native";

import icon_menu from 'static/icons/icon_menu.png';

export default function Button_menu({onPress}){
    return(
        <TouchableOpacity onPress={onPress}>
            <Image source={icon_menu} style={Style.icone_menu}/>
        </TouchableOpacity>
    );
}

const Style = StyleSheet.create({
    icone_menu:{
        width :55,
        height:50,
    }
});