import { TouchableOpacity , View , Text } from "react-native";

import { getStyles } from "./estilo/entrar";

export default function Button_entrar({onPress}) 
{
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={Style.view}>
                <Text style={Style.text}>Entrar</Text>
            </View>
        </TouchableOpacity>
    );
}
const Style = getStyles();