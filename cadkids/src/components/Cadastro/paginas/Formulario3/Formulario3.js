import   React,{ useState } from "react";
import { useRoute } from "@react-navigation/native";
import { View , Text , TextInput , ImageBackground , Image, ScrollView ,Button} from "react-native";



/**/
import { createCliente }  from "src/BackEnd/FireBase/create/createCliente";
/**/
import { Dados_cadastro } from "../../ValidacaoManipulacao/Dados";
import { VSenha }         from "../../ValidacaoManipulacao/Formulario_3";
import { getStyles }      from "./estilo/style";
/**/ 
import Logo             from 'static/icons/icon_logo.png';
import icon_Cadkids     from 'static/icons/icon_cadkids.png';
import plano_de_fundo   from 'static/imagens/plano_de_fundo_padrao.png';
import Button_criar     from './form_touch/buttonCria';

const Style = getStyles();

export default function Formulario_3({navigation}){
    const route = useRoute();
    const [E_mail,setE_mail]  = useState(null);
    const [Senha ,setSenha]   = useState(null);
    const [Rsenha,setRsenha]  = useState(null);

    const criarConta = () =>
    {
        setE_mail(E_mail);
        setRsenha(Rsenha);
        setSenha(Senha);

        if (VSenha(Senha,Rsenha)) 
        {    
            const Valor = Dados_cadastro(route,E_mail,Senha);
            createCliente(Valor,navigation);
        }else{
            alert('Invalido');
            return;
        }
    }

    return(
        <ImageBackground source={plano_de_fundo} style={{flex:1}}>
            
            <ScrollView>
            <View style={Style.container}>
                
                <View>
                    <Image source={Logo} style={Style.icone_logo}/>
                </View>

                <View style={Style.formulario_view}>          
                    <View>
                        <Text style={Style.text}>E-mail</Text>
                        <TextInput 
                            placeholder  = "Digite seu nome"
                            style        = {Style.textInput}
                            value        = {E_mail}
                            onChangeText = {setE_mail}
                        />
                        
                        <Text style={Style.text}>Crie sua senha </Text>
                        <TextInput
                            placeholder  = "Digite a senha"
                            style        = {Style.textInput}
                            maxLength    = {25}
                            value        = {Senha}
                            onChangeText = {setSenha}
                        />

                        <Text style={Style.text}>Confirme sua senha</Text>
                        <TextInput 
                            placeholder  ="Repita a senha"
                            style        = {Style.textInput}
                            maxLength    = {25}
                            value        = {Rsenha}
                            onChangeText = {setRsenha}
                        />
                    </View>

                    <View style = {Style.button_continua}>
                        <Button_criar onPress={criarConta}/>
                    </View>
                </View>

                <View>
                    <Image source={icon_Cadkids} style={Style.icone_cadkids}/>
                </View>
            
            </View>
            </ScrollView>
        </ImageBackground>
    );
}
