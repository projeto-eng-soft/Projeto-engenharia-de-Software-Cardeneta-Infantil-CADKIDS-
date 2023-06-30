import { TouchableOpacity , Text } from "react-native";
import { getStyles } from "./estilo/button";

const Style = getStyles();

export default function Button_enviar_e_mail({onPress}){
    return(
        <TouchableOpacity style={Style.view} onPress={onPress}>
            <Text style={Style.text}>Procurar</Text>
        </TouchableOpacity>
    );
}