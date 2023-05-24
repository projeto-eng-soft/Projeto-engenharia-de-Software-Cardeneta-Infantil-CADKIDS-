import { useState } from "react";
import { View , Text , TextInput , ImageBackground , Image} from "react-native";

import { getStyles }    from './estilo/cad_crianca';
/**/
import Logo             from 'static/icons/icon_logo.png';
import icon_Cadkids     from 'static/icons/icon_cadkids.png';
import plano_de_fundo   from 'static/imagens/plano_de_fundo_padrao.png';
/**/ 
import Button_cadastrar from './form_touch/button_cadastrar';

const Style = getStyles();

export default function Cadastro_criança({navigation}){

    const [Certidao,setCertidao] = useState(null);

    const Cadastrando_criança = () =>{ navigation.navigate('Crianca'); }
    
    return(
        <ImageBackground style={Style.container} source={plano_de_fundo}>
            
            <View>
                <Image source={Logo} style={Style.icone}/>
            </View>

            <View>
                <Text>id</Text>
                <TextInput
                    placeholder ="oi"
                    keyboardType="numeric"
                    style       = {Style.textinput}  
                    value       = {Certidao}
                    onChangeText= {setCertidao}
                />
            </View>
            <View>
                <Button_cadastrar onPress = {Cadastrando_criança} />
            </View>

            <View>
                <Image source={icon_Cadkids} style={Style.icone_cadkids}/>
            </View>
            </ImageBackground>
    )

}