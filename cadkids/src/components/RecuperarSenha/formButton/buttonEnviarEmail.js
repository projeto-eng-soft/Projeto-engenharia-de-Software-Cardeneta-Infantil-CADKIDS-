import { TouchableOpacity , Text } from "react-native";
import { getStyles } from "./estilo/button";

const Style = getStyles();

export default function Button_enviar_e_mail({navigation}){
    return(
        <TouchableOpacity style={Style.view}>
            <Text style={Style.text}>Enviar codigo</Text>
        </TouchableOpacity>
    );
}