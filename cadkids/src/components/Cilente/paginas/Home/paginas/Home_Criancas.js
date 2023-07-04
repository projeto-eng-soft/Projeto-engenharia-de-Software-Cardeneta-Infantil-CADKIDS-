import { useState ,useEffect } from "react";
import { useRoute }            from "@react-navigation/native";

import { TouchableOpacity , View , Text , 
         ImageBackground , Image , ScrollView } from "react-native";

/**/ 
import { Getcriancas } from "src/BackEnd/FireBase/read/Criancas";
import { getStyles }   from '../estilo/style';

/**/ 
import plano_de_fundo           from 'static/imagens/plano_de_fundo_padrao.png';
import Icone_criancas           from 'static/icons/icon_crianças.png';
import Button_menu              from "../form_button/button_menu";
import Button_adicionar_crianca from '../form_button/button_cadastrar_crianca';

const Style = getStyles();
const paletaCores = [
    // '#eecbca',
    // '#80c6f2',
    // '#d3b5f6',
    // '#c17383',
    // '#ff7fa8',
    // '#e5804d',
    // '#938672'
    '#FE9E56',
    // '#CBF173',
    '#98CB21',
    '#3D99E1',
    '#957DF4',
    '#F789DC',
  ];
  

export default function Home({navigation}){

    const route = useRoute();
    const [Cores,setCores]       = useState([]);
    const [view, setView]        = useState([]);
    const [Criancas,setCriancas] = useState([]);

    
    useEffect(() => {
        const addcionar_cores = (tamanho) =>
        {
            var cores = [];
            for (let i=0;i<tamanho;i++)
            {
                var c = Math.ceil(Math.random() * paletaCores.length-1)              
                cores.push(paletaCores[c]);
            }
            setCores(cores);
        }

        const fetchValores = async () => {
            const valoresData = await Getcriancas(route.params.Email);

            if (valoresData.length !=0)
            {
                addcionar_cores(valoresData.length);
                setCriancas(valoresData);
            }
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
                            backgroundColor:Cores[index],
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
                                fontWeight: '700',
                                fontSize: 17,
                                textShadowColor: 'rgba(50, 50, 50, 1)',
                                textShadowOffset: {width: 3, height: 3},
                                textShadowRadius: 4
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

