import { useState } from "react";
import MaskInput,{ Masks } from "react-native-mask-input";
import { View , ImageBackground,Image, Text,TextInput} from "react-native";

import { getStyles }    from "./estilo/procurar";
import icone_logo       from 'static/icons/icon_logo.png';
import icon_Cadkids     from 'static/icons/icon_cadkids.png';
import plano_de_fundo   from 'static/imagens/plano_de_fundo_padrao.png';
import Procurar_crianca from "./form_button/procurar_crianca";

import { Getcrianca_medico } from "src/back_end/FireBase/read/Criancas";

const Style = getStyles();

export default function Procurar({navigation}){
    const [Codigo,setCodigo] = useState(null);
    
    const Procura_crianca = () =>{
        try{
           Getcrianca_medico(Codigo,navigation);
        }catch(error){
            alert(error.message);
        }
    }

    return(
        <ImageBackground source={plano_de_fundo} style={Style.container}>
            
            <View>
                <Image source={icone_logo} style={Style.icone}/>
            </View>

            <View style={Style.formulario_view}>
                <Text style={Style.text}>Número do S.u.S</Text>
                <MaskInput
                    style        = {Style.textInput}
                    placeholder  ="digite o número"
                    keyboardType ="numeric" 
                    maxLength    = {19}
                    value        = {Codigo}
                    onChangeText = {setCodigo}
                    mask         = {certidao_caracter}
                />

            <View style={Style.button_recuperar}>
                <Procurar_crianca onPress={Procura_crianca}/>
            </View>
            
            </View>

            <View>
                <Image source={icon_Cadkids} style={Style.icone_cadkids}/>
            </View>
        
        </ImageBackground>
    );
}

const certidao_caracter = [
    /\d/, /\d/, /\d/,' ',/\d/, /\d/, /\d/,' ',/\d/, /\d/, /\d/,' ',
    /\d/, /\d/, /\d/," ",/\d/, /\d/, /\d/                       
]