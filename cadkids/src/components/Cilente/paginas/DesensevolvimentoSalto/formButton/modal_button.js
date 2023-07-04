import { TouchableOpacity , Text, View} from "react-native";
import { getStyles } from './estilos/button';
export default function Fechar({onPress}){
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={Styles.view}>
                <Text style={Styles.text}>Fechar</Text>
            </View>
        </TouchableOpacity>
    );
}

const Styles = getStyles();