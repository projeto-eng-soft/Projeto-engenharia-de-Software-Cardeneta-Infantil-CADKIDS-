import { useState } from "react";
import { View , Text , TouchableOpacity ,ImageBackground , Image } from "react-native";

import { getStyles }  from "./estilo/style";
import plano_de_fundo from 'static/imagens/plano_de_fundo_padrao.png';
import Button_menu    from "./form_button/button_menu";

const Style = getStyles();

export default function Crianca({navigation})
{
    const Abrir_menu = () =>                { navigation.openDrawer();                 };
    const Vacinas    = () =>                { navigation.navigate('Vacinas');          };
    const Desenvolvimento_Cognitivo = () => { navigation.navigate('Desenvolvimento_c');};
    const Desenvolvimento_Fisico    = () => { navigation.navigate('Desenvolvimento_f');};


    return(
        <ImageBackground source={plano_de_fundo} style={Style.container}>

            <View style={Style.container_button_menu} >
                <Button_menu onPress={Abrir_menu}/>      
            </View>

            <View>
                <Text style={Style.text_nome_usuario}> Nome de usuario </Text>
            </View>
            
            <View style={Style.container_opcoes}>

                <TouchableOpacity style={Style.button_opcoes} onPress={Vacinas}>
                    <Text style={Style.text}>Vacinas</Text>
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