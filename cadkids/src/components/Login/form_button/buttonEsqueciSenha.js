import { TouchableOpacity , View , Text } from "react-native";

import { getStyles } from "./estilo/esqueciSenha";

export default function Button({navigation}){
    return(
        <TouchableOpacity onPress={()=>navigation.navigate('Recuperar_senha')}>
            <View>
                <Text style={Style.text}>Esqueceu sua senha?</Text>
            </View>
        </TouchableOpacity>
    );
}
const Style = getStyles();