import { useRoute }           from "@react-navigation/native";
import { useEffect,useState } from "react";
import { View,ImageBackground ,Text ,Image ,ScrollView ,TouchableOpacity } from "react-native";

import { getStyles }         from "./estilo/medico_crianca";
import { GetvacinasCrianca } from "src/BackEnd/FireBase/read/Getvacinas";

import icone_logo       from 'static/icons/icon_logo.png';
import plano_de_fundo   from 'static/imagens/plano_de_fundo_padrao.png';

const Style = getStyles();

export default function VacinasAplicadas({navigation}){
    // console.log("Vacinas Aplicadas")
    const route  = useRoute();
    // console.log(route.params)
    const Dados  = route.params.dados 
    const userId = route.params.userId
    const [Vacinas,setVacinas] = useState([]);

    useEffect(() => {
        const fetchValores = async () => {
          const valoresData = await GetvacinasCrianca(userId,0);
          setVacinas(valoresData);
        };
        fetchValores();
        // console.log(Vacinas)
      }, 
    []);  
    
    
    return(
        <ImageBackground source={plano_de_fundo} style={Style.container}>  

            <View>
                <Image source={icone_logo} style={Style.icone}/>
            </View>
            <View>
                <Text>Nome: {Dados.Nome }</Text>
                <Text>Data de Nascimento : {Dados.dataNascimento}</Text>
            </View>

            <View>
                <ScrollView style={Style.scrollview_vacinas}>
                    {Vacinas.map((item,index) =>
                        <TouchableOpacity style={Style.containers_vacinas_aplicada} key={index}>
                            <Text style={{fontWeight:'bold'}}>{item.DOSE}</Text>
                            <Text style={Style.vac_text}     >{item.VACINA}</Text>
                        </TouchableOpacity>        
                    )}
                </ScrollView>
            </View>
        </ImageBackground>
    )
}