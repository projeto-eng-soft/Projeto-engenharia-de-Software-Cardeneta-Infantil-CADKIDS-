import { useRoute }           from "@react-navigation/native";
import { useEffect,useState } from "react";
import { View , ImageBackground ,Text ,Image ,ScrollView ,TouchableOpacity , Modal, TextInput, ViewBase } from "react-native";

import { getStyles }          from "./estilo/medico_crianca";
import { GetvacinasCrianca }  from "src/BackEnd/FireBase/read/Getvacinas";

import icone_logo       from 'static/icons/icon_logo.png';
import icone_aplicada   from 'static/icons/icon_medico_aplicado.png'
import plano_de_fundo   from 'static/imagens/plano_de_fundo_padrao.png';

const Style = getStyles();

export default function VacinasPendentes({navigation}){

    const route  = useRoute();
    const Dados  = route.params.dados 
    const userId = route.params.userId

    const [Vacinas,setVacinas]       = useState([]);
    const [Visible,setVisible]       = useState(false);
    const [NomeVacina,setNomeVacina] = useState(null);
    const [Idade,setIdade] = useState(null);
    const dataAtual = new Date();
    const dia = dataAtual.getDate();
    const mes = dataAtual.getMonth() + 1;
    const ano = dataAtual.getFullYear();
    const [DataAplicacao,setDataAplicacao] = useState(dia + "/" + mes + "/" + ano)


    useEffect(() => {
        const fetchValores = async () => {
          const valoresData = await GetvacinasCrianca(userId,1);
          setVacinas(valoresData);
        };
        fetchValores();
      }, 
    []);  

    const Aplicar = (NomeVacina,Idade) =>{
        setVisible(!Visible);
        setNomeVacina(NomeVacina);
        setIdade(Idade)
    }
    const Assinar = () =>{
        setVisible(!Visible);
        const data = {
            status:true,
            DataAplicacao :DataAplicacao,
            Lote : Lote
        }

    }

    
    
    return(
        <ImageBackground source={plano_de_fundo} style={Style.container}>  

            <View>
                <Image source={icone_logo} style={Style.icone}/>
            </View>
            <View>
                <Text style={{fontSize:16}}>Nome: {Dados.Nome }</Text>
                <Text style={{fontSize:16}}>Data de Nascimento : {Dados.dataNascimento}</Text>
            </View>

            <View>
                <ScrollView style={Style.scrollview_vacinas}>
                    {Vacinas.map((item,index) =>
                        <View key={index}>
                            <TouchableOpacity style={Style.button_aplicar} onPress={()=>Aplicar(item.VACINA,item.IDADE)}>
                                <View style={Style.view_1}>
                                    <Text>Aplicar vacina</Text>
                                    <Image source={icone_aplicada} style={{height:35,width:35}}/>
                                </View>
                            </TouchableOpacity>

                            <View style={Style.containers_vacinas} >
                                <Text style={{fontWeight:'bold'}}>{item.DOSE}</Text>
                                <Text style={Style.vac_text}>{item.VACINA}</Text>
                            </View>  
                        </View>
                    )}
                </ScrollView>

                <Modal animationType='slide' transparent={true} visible={Visible}>
                    <View style={Style.modal_view}>
                        <View style={{marginTop:10}}>
                            <Text style={{fontSize:20,fontWeight:'bold'}}>Informações</Text>
                        </View>

                        <View style={{marginTop:10,marginBottom:10}}>
                            <Text style={{fontSize:16}}>Idade   : {Idade}</Text>
                            <Text style={{fontSize:16}}>Vacina : {NomeVacina}</Text>
                            <View style={{flexDirection:"row"}}>
                                <Text style={{fontSize:16}}>Lote     :</Text>
                                <TextInput 
                                    style={{borderWidth:0.1,width:100,borderRadius:10}}
                                />
                            </View>

                            <Text style={{fontSize:16}}>Status : Não Aplicada</Text>   
                        </View>
                        <View>
                            <TouchableOpacity onPress={Assinar} >
                                <View style={Style.modal_button}>
                                    <Text style={{fontSize:15}}>Aplicar vacina</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                    </View>

                </Modal>
            </View>
        </ImageBackground>
    )
}