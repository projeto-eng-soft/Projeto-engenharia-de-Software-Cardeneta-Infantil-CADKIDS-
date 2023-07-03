import { useState } from "react";
import { View , Text , TouchableOpacity ,ImageBackground , Image } from "react-native";

import { getStyles }  from "../estilo/style";
import plano_de_fundo from 'static/imagens/plano_de_fundo_padrao.png';
import Button_menu    from "../formButton/button_menu";
import { useRoute } from "@react-navigation/native";

const Style = getStyles();

export default function Crianca({navigation})
{
    const route          = useRoute();
    const [Nome,setNome] = useState(route.params.Nome)
    const Abrir_menu = () =>                { navigation.openDrawer();                 };
    const Vacinas    = () =>                { navigation.navigate('Vacinas');          };
    const Desenvolvimento_Cognitivo = () => { navigation.navigate('Desenvolvimento_c');};
    const Desenvolvimento_Fisico    = () => { navigation.navigate('Desenvolvimento_f');};
    const Desensevolvimento_Salto   = () => { navigation.navigate('Desenvolvimento_s');}; 

    return(
        <ImageBackground source={plano_de_fundo} style={Style.container}>

            <View style={Style.container_button_menu} >
                <Button_menu onPress={Abrir_menu}/>      
            </View>

            <View style={Style.container_nome_usuario}>
                <Text style={Style.text_nome_usuario}>{Nome}</Text>
            </View>
            
            <View style={Style.container_opcoes}>

                <TouchableOpacity style={Style.button_opcoes} onPress={Vacinas}>
                    <Text style={Style.text}>Vacinas</Text>
                </TouchableOpacity>


                <TouchableOpacity style={Style.button_opcoes} onPress={Desensevolvimento_Salto}>
                    <Text style={Style.text}>Marcos do Desenvolvimento</Text>
                </TouchableOpacity>

                <TouchableOpacity style={Style.button_opcoes} onPress={Desenvolvimento_Fisico}>
                    <Text style={Style.text}>Desenvolvimento Físico</Text>
                </TouchableOpacity>

                <TouchableOpacity style={Style.button_opcoes} onPress={Desenvolvimento_Cognitivo}>
                    <Text style={Style.text}>Desenvolvimento Cognitivo</Text>
                </TouchableOpacity>

            </View>
            
        </ImageBackground>
    )
}