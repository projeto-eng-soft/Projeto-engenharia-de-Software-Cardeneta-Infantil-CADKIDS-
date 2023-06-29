import { TouchableOpacity, View, Text } from "react-native";
import { getStyles } from "../../estilo_button_continuar/continuar";

export default function Button({onPress})
{
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={Style.view}>
                <Text style={Style.text}>Criar conta</Text>
            </View>
        </TouchableOpacity>
    );
}


const Style = getStyles();