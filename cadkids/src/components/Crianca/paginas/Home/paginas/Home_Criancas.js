import { useState ,useEffect } from "react";
import { useRoute }            from "@react-navigation/native";

import { TouchableOpacity , View , Text , 
         ImageBackground , Image , ScrollView } from "react-native";

/**/ 
import { Getcriancas } from "src/back_end/FireBase/read/Criancas";
import { getStyles }   from '../estilo/style';

/**/ 
import plano_de_fundo           from 'static/imagens/plano_de_fundo_home_crianca.jpg';
import Icone_criancas           from 'static/icons/icon_crianças.png';
import Button_menu              from "../form_button/button_menu";
import Button_adicionar_crianca from '../form_button/button_cadastrar_crianca';

const Style = getStyles();
const paletaCores = [
   '#aef0f6',
   '#fd8bf3',
   '#fb8f9f',
   '#5e638c',
   '#df91de',
   '#b5eb95',
   '#ec861a',
   '#5b737b',
   '#9e647c',
   '#cfec5a',
   '#b6c9bc',
   '#f34560'
  ];
  

export default function Home({navigation}){

    const route = useRoute();
    const [Cores,setCores] = useState([]);
    const [view, setView] = useState([]);
    const [Criancas,setCriancas] = useState([]);

    
    useEffect(() => {
        const addcionar_cores = (tamanho) =>{
            var cores = [];
            cores.push(Math.ceil(Math.random() * paletaCores.length))

            while (tamanho != 0){
                var c = Math.ceil(Math.random() * 10)
                if (cores.indexOf(c) == -1)
                {
                    cores.push(c);tamanho -=1;
                }      
            }
            setCores(cores);
        }
        const fetchValores = async () => {
          const valoresData = await Getcriancas(route.params.Email);
          addcionar_cores(valoresData.length);
          setCriancas(valoresData);
        };
    
        fetchValores();
      }, 
    []);
    
    const Cadastro = () =>{
        navigation.navigate('Cadastro_Crianca',{Email:route.params.Email})
    }  

    const Crianca = (Nome) =>{
        navigation.navigate('Crianca',{Nome:Nome})
    }

    const Abrir_menu = () => { 
        navigation.openDrawer(); 
    }
   
    
    return(
        <ImageBackground source={plano_de_fundo} style={Style.container}>

            <View style={Style.container_button_menu}>
                <Button_menu onPress={Abrir_menu}/>      
            </View>

            <View style={Style.conteiner_nome_crianca}>
                <Image source={Icone_criancas} style={Style.icone_crianca}/>
            </View>

            <ScrollView style={Style.scrollview}>
                {Criancas.map((item,index) =>
                    <TouchableOpacity style={
                        {   
                            backgroundColor:paletaCores[Cores[index]],
                            alignItems    :'center',
                            justifyContent: 'center',
                            width:350,
                            height:50,
                            marginBottom:20,
                            borderRadius:10,
                            borderWidth:1.2,
                        }
                    } key={index} onPress={()=>Crianca(item.Nome)}>
                        <Text style={
                            {   
                                color:'white',
                                fontWeight:'bold',
                                fontSize:15
                            }
                            }>{item.Nome}</Text>
                    </TouchableOpacity>
                )}

            <View style={Style.container_button_adcionar}> 
                <Text style={Style.text_cadastrar_crianca}>Cadastrar Criança</Text>
                <Button_adicionar_crianca onPress={Cadastro}/>
            </View>
            
            </ScrollView>

        </ImageBackground>
    );
}

