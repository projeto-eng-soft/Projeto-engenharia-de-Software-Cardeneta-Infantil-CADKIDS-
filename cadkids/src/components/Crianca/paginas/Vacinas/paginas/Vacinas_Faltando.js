import { View, Text ,ImageBackground} from "react-native";

import plano_padrao   from 'static/imagens/plano_de_fundo_padrao.png';
import { getStyles } from "./estilo/aplicadas";
const Style_background = getStyles()
export default function Aplicadas_Faltando({navigation}){
    return(
        <ImageBackground source={plano_padrao} style={Style_background.container}>
            <Text>a</Text>
        </ImageBackground>
    );
}