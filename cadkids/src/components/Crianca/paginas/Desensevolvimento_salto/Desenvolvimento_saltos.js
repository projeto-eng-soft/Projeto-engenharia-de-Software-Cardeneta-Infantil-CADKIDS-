import { useState,useEffect } from "react";
import { View , Text , ImageBackground ,Image ,ScrollView ,TouchableOpacity,Modal} from "react-native";

import { GetMarcos } from "src/back_end/FireBase/read/Marcos";
import { getStyles } from "./estilo/estilo";
import Fechar        from "./form_button/modal_button";

import Logo           from 'static/icons/icon_logo.png';
import icon_infor     from 'static/icons/icon_infor.png';
import plano_de_fundo from 'static/imagens/plano_de_fundo_crianca.jpg';

const Styles = getStyles()


export default function Desenvolvimento_s({navigation}){
    const [Item   ,setItem]    = useState({});
    const [Marcos,setMarcos]   = useState([]);
    const [Visible,setVisible] = useState(false);

    useEffect(() => {
        const fetchValores = async () => {
          const valoresData = await GetMarcos();
          setMarcos(valoresData);
        };
        fetchValores();
      }, 
    []);

    const Informacao = (item) => {
        setItem(item);
        setVisible(true);
    }

    const Close_popup = () =>{ setVisible(false); }

    return(
        <ImageBackground source={plano_de_fundo} style={Styles.container}>
            <View style={Styles.container_logo}>
                <Image source={Logo} style={Styles.icone_logo}/>
            </View>

            <View style={Styles.container_title}>
                <Text style={Styles.text_title}>Marcos do Desenvolvimento</Text>
            </View>

            <ScrollView style={Styles.scrollview_marcos}>
                {Marcos.map((item,index) =>

                    <View key={index}>
        
                        <TouchableOpacity style={Styles.container_infor} onPress={()=>Informacao(item)}>
                            <Image source={icon_infor} style={Styles.icone_infor}/>
                        </TouchableOpacity>

                        <View style={Styles.container_marcos}>
                            <View style={Styles.container_marcos_view2}>
                                <T style={Styles.vac_text}>Marco</T>
                                <Text>{item.Marcos}</Text>
                            </View>         
                        </View>
                                                                            
                        <View style={Styles.container_marcos_view1}>
                            <T style={Styles.vac_text}>Mês</T>
                            <Text>{item.Meses}</Text>
                        </View>

                    </View>        
                )}
            </ScrollView>


            <Modal animationType='slide' transparent={true} visible={Visible} onRequestClose={Close_popup}>
                <View style={Styles.modal_container}>

                    <Text style={Styles.modal_text_1}>
                        Informações adicionais
                    </Text>
                    
                    <View style={Styles.modal_informacao}>
                            <Text style={Styles.modal_text_2}>&#x025AB; <B>Marco</B>     :  {Item.Marcos}</Text>
                            <Text style={Styles.modal_text_2}>&#x025AB; <B>Mês</B>          :  {Item.Meses}</Text>
                            
                            <Text style={Styles.modal_text_2}>
                                &#x025AB; <B>Como Pesquisar</B> : {Item['Como pesquisar']}   
                            </Text>
                    </View>

                    <View style={Styles.modal_button}>
                        <Fechar onPress={Close_popup} />
                    </View>
                </View>
            </Modal>

        </ImageBackground>
    );
}
const B = (props) => <Text style={{fontWeight: 'bold',fontSize:16}}>{props.children}</Text>
const T = (props) => <Text style={{fontWeight: 'bold',fontSize:15}}>{props.children}</Text>
