import { TouchableOpacity, View, Text } from "react-native";

import { getStyles } from "../../estiloButtonContinuar/continuar";

export default function Button({onPress})
{
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={Style.view}>
                <Text style={Style.text}>Continuar</Text>
            </View>
        </TouchableOpacity>
    );
}

const Style = getStyles();