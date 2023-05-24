import { StyleSheet , TouchableOpacity , View , Text } from "react-native";

import { getStyles } from "./estilo/casdatrar";
export default function Button_cadastrar({onPress}){
    return(
        <TouchableOpacity onPress={onPress}>
            <View>
                <Text style={Style.text}>Cadastrar Criança</Text>
            </View>
        </TouchableOpacity>
    );
}

const Style = getStyles();