import { useState } from "react";
import { useRoute } from "@react-navigation/native";
import MaskInput,{ Masks } from "react-native-mask-input";
import { View , Text , TextInput , ImageBackground , Image} from "react-native";

import { createCrianca } from "src/back_end/FireBase/create/createCriança";
import { getStyles }     from '../estilo/cad_crianca';
/**/
import Logo             from 'static/icons/icon_logo.png';
import icon_Cadkids     from 'static/icons/icon_cadkids.png';
import plano_de_fundo   from 'static/imagens/plano_de_fundo_padrao.png';

/**/ 
import Button_cadastrar from '../form_touch/button_cadastrar';

const Style = getStyles();
export default function Cadastro_criança({navigation}){
    const route = useRoute()

    const [Certidao,setCertidao]             = useState(null);
    const [Nome,setNome]                     = useState(null);
    const [dataNascimento,setDataNascimento] = useState(null);

    const Cadastrando_crianca = () =>{  
        createCrianca({
            Email:route.params.Email,
            Certidao:Certidao,
            Nome:Nome,
            dataNascimento:dataNascimento
        },navigation)
    }
    
    return(
        <ImageBackground style={Style.container} source={plano_de_fundo}>
            
            <View>
                <Image source={Logo} style={Style.icone}/>
            </View>

        
            <View style={Style.formulario_view}>
                <Text style={Style.text}>Número de certidão</Text>
                <MaskInput
                    style        = {Style.textInput}
                    placeholder  ="digite o número de certidão"
                    keyboardType ="numeric" 
                    maxLength    = {19}
                    value        = {Certidao}
                    onChangeText = {setCertidao}
                    mask         = {certidao_caracter}
                />
                
                <Text style={Style.text}>Nome Completo</Text>
                <TextInput
                     style      = {Style.textInput}
                    placeholder ="Digite o nome"
                    keyboardType="default"
                    value       = {Nome}
                    onChangeText= {setNome}
                />

                <Text style={Style.text}>Data de nascimento</Text>
                <MaskInput
                    style        = {Style.textInput}
                    placeholder  = "Sua data de nascimento"
                    keyboardType = "numeric"
                    maxLength    = {10}
                    value        = {dataNascimento}
                    onChangeText = {setDataNascimento}
                    mask         = {[/\d/, /\d/, '/', 
                                     /\d/, /\d/, '/', 
                                    /\d/, /\d/, /\d/, /\d/]}
                />
            
            
            <View style={Style.button_criar}>
                <Button_cadastrar onPress = {Cadastrando_crianca} />
            </View>

            </View>

            <View>
                <Image source={icon_Cadkids} style={Style.icone_cadkids}/>
            </View>
            </ImageBackground>
    )

}


const certidao_caracter = [
    /\d/, /\d/, /\d/,' ',/\d/, /\d/, /\d/,' ',/\d/, /\d/, /\d/,' ',
    /\d/, /\d/, /\d/," ",/\d/, /\d/, /\d/                       
]