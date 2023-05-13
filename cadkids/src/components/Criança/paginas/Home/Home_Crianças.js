import { useState } from "react";
import { TouchableOpacity , View , Text , ImageBackground , Image } from "react-native";

import { getStyles }            from './estilo/style';
import plano_de_fundo           from 'static/imagens/plano_de_fundo_padrao.png';
import Icone_criancas           from 'static/icons/icon_crianças.png';
import Button_menu              from "./form_button/button_menu";
import Button_adicionar_crianca from './form_button/button_cadastrar_crianca';

const Style = getStyles();

export default function Home({navigation}){
    const [view, setView] = useState([]);


    const Crianca = () =>{
        setView([view,
            <TouchableOpacity style={Style.container_crianca} value={1}>
                <Text value={1}>oi</Text>
            </TouchableOpacity>
        ])
    }
    
    const Abrir_menu = () => { navigation.openDrawer(); }

    return(
        <ImageBackground source={plano_de_fundo} style={Style.container}>
            <View style={Style.container_button_menu}>
                <Button_menu onPress={Abrir_menu}/>      
            </View>

            <View>
                <Image source={Icone_criancas} style={Style.icone_crianca}/>
            </View>
         
            {view.map((view) => view)} 

            <View style={Style.container_button_adcionar}> 
                <Text style={Style.text_cadastrar_crianca}>Cadastrar Criança</Text>
                <Button_adicionar_crianca navigation={navigation}/>
            </View>
        </ImageBackground>
    );
}