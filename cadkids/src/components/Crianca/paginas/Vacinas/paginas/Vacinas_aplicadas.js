import { DB } from "src/firebaseConfig";
import { getDocs , collection, query , orderBy }         from "firebase/firestore";
import { View, Text ,ImageBackground , TouchableOpacity} from "react-native";


import { getStyles } from "./estilo/aplicadas";
import plano_padrao  from 'static/imagens/plano_de_fundo_padrao.png';
import { useEffect, useState } from "react";

const Styles = getStyles();

export default function Aplicadas_Vacinas({navigation}){
    const [Nome,setNome] = useState(null)
    /*useEffect(async() => {
    
        const q = query(collection(DB, "vacinas_ate_12meses"),orderBy('index'));

        const querySnapshot = await getDocs(q);
        
        querySnapshot.forEach((doc) => {
            const dict  = doc.data()
            setNome(dict.Nome);
        }); 
    })*/
   
        
    
    return(

        <ImageBackground source={plano_padrao} style={Styles.container}>
            <TouchableOpacity style={{marginTop:60}} >
                <Text>{Nome}</Text>
            </TouchableOpacity>
           
        </ImageBackground>
    );
}

