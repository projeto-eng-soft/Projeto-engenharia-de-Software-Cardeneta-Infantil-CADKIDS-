import { TouchableOpacity , View , Text } from "react-native";

import { getStyles } from "./estilo/cadastrar";

export default function Button({navigation})
{
    return(
        <TouchableOpacity onPress={()=>navigation.navigate('Cadastro')}>
            <View>
                <Text style={Style.text}>Quero me cadastrar</Text>
            </View>
        </TouchableOpacity>
    );
}
const Style = getStyles();