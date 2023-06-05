import { useState } from "react";
import { TouchableOpacity , View , Text , ImageBackground , Image } from "react-native";

import { getStyles }            from '../estilo/style';
import plano_de_fundo           from 'static/imagens/plano_de_fundo_padrao.png';
import Icone_criancas           from 'static/icons/icon_crianças.png';
import Button_menu              from "../form_button/button_menu";
import Button_adicionar_crianca from '../form_button/button_cadastrar_crianca';

const Style = getStyles();
const cores = [
    "rgb(0, 132, 255)","rgb(7, 63, 114)","rgb(209, 2, 255)",
    "rgb(122, 1, 122)","rgb(255, 6, 255)","rgb(255, 6, 197)",
    "rgb(250, 189, 236)","rgb(252, 70, 100)","rgb(70, 252, 170)",
    "rgb(101, 199, 101)","rgb(249, 255, 75)","rgb(255, 234, 75)",
    "cyan"]
export default function Home({navigation}){

    const [view, setView] = useState([]);


    const Crianca = () =>{
        const random =  Math.floor(Math.random() * cores.length);
        setView([view,
            <TouchableOpacity style={{
                backgroundColor:cores[random],
                width    :350,
                padding  :10,
                marginTop   :15,
                paddingLeft :10,
                borderRadius:15,
                }} value={1}>

                <Text value={1} >oi</Text>
            
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

