import { TouchableOpacity , View , Text } from "react-native";

import { getStyles } from "./estilo/editar";

export default function buttonEditar({onPress}){
    return(
        <TouchableOpacity onPress={onPress}>
            <View>
                <Text style={Style.text}>Editar</Text>
            </View>
        </TouchableOpacity>
    );
}
const Style = getStyles();