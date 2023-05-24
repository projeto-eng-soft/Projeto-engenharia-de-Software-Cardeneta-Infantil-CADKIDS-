import { TouchableOpacity, View, Text } from "react-native";

import { getStyles } from "../../estilo_button_continuar/continuar";

export default function Button({navigation})
{
    return(
        <TouchableOpacity onPress={()=>navigation.navigate('Formulario_3')}>
            <View style={Style.view}>
                <Text style={Style.text}>Continuar</Text>
            </View>
        </TouchableOpacity>
    );
}

const Style = getStyles();