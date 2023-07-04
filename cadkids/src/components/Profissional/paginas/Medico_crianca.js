import { useRoute }           from "@react-navigation/native";
import { useEffect,useState } from "react";
import { View,ImageBackground,Text,Image } from "react-native";

import { getStyles }          from "./estilo/medico_crianca";
import { Getvacinas_crianca } from "src/back_end/FireBase/read/Getvacinas";

import icone_logo       from 'static/icons/icon_logo.png';
import icon_Cadkids     from 'static/icons/icon_cadkids.png';
import plano_de_fundo   from 'static/imagens/plano_de_fundo_padrao.png';

const Style = getStyles();
export default function MedicoCrianca({navigation}){
    const route  = useRoute();
    const nome   = route.params.Nome
    const userId = route.params.id
    const [Vacinas,setVacinas] = useState([]);
    const doc = route.params.doc;

    useEffect(() => {
        const fetchValores = async () => {
          const valoresData = await Getvacinas_crianca(userId);
          setVacinas(valoresData);
        };
        setVacinas(fetchValores());
        // navigation.navigate('medVacinas', {Vacinas, doc})r
      }, 
    []);   
    return(
        <ImageBackground source={plano_de_fundo} style={Style.container}>  

            <View>
                <Image source={icone_logo} style={Style.icone}/>
            </View>
            <Text>{nome}</Text>
        </ImageBackground>
    )
}