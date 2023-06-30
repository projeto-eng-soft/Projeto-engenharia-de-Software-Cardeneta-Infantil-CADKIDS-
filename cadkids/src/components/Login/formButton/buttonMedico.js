import { TouchableOpacity , View , Text , Image } from "react-native";

import { getStyles } from "./estilo/medico";
import Icon_medico   from 'static/icons/icon_medico.png';

export default function Button_medico({onPress})
{
    return(
        <TouchableOpacity onPress={onPress}>
            <View>
                <Text style={Style.texto}>Sou agente de saúde</Text>
                
                <View style={Style.conteiner}>
                    <Image source={Icon_medico} style={Style.icone}/>
                </View>
            </View>     
        </TouchableOpacity>
    );
}
const Style = getStyles();