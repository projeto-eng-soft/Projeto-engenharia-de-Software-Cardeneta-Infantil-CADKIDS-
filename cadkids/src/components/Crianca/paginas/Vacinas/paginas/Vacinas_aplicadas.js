import { useEffect, useState } from "react";
import { View , Text , ImageBackground , 
        Image , TouchableOpacity , ScrollView ,
        Modal } from "react-native";

/**/
import { Getvacinas_12 } from "src/back_end/FireBase/read/Getvacinas";
import { getStyles }    from "./estilo/vacinas";
import { getAplicadas } from "./estilo/vacinas";
import Fechar        from "./form_button/modal_button";
/**/
import Logo          from 'static/icons/icon_logo.png';
import plano_padrao  from 'static/imagens/plano_de_fundo_crianca.jpg';

const Styles = getStyles('rgb(30, 144, 255');
const Styles_container  = getAplicadas();

export default function Aplicadas_Vacinas({navigation}){
    const [Item   ,setItem]    = useState({});
    const [Visible,setVisible] = useState(false);
    const [Vacinas,setVacinas] = useState([])

    const Informacao = (item) => {
        setItem(item);
        setVisible(true);
    }

    const Close_popup = () =>{
        setVisible(false);
    }
    
    return(

        <ImageBackground source={plano_padrao} style={Styles.container}>

            <View style={Styles.container_logo}>
                <Image source={Logo} style={Styles.icone_logo}/>
            </View>
            
            <View style={Styles.container_title}>
                <Text style={Styles.text_title}>Vacinas Aplicadas</Text>
            </View>

            <ScrollView style={Styles.scrollview_vacinas}>
                {Vacinas.map((item,index) =>
                    <TouchableOpacity style={Styles_container.containers_vacinas} key={index} onPress={()=>Informacao(item)}>
                        <Text style={Styles.vac_text}>{item.DOSES}</Text>
                        <Text style={Styles.vac_text}>&#8226; {item.VACINAS}</Text>
                    </TouchableOpacity>        
                )}
            </ScrollView>

            <Modal animationType='slide' transparent={true} visible={Visible} onRequestClose={Close_popup}>
                <View style={Styles.modal_container}>

                    <Text style={Styles.modal_text_1}>Informações adicionais</Text>
                    
                    <View style={Styles.modal_informacao}>
                            <Text style={Styles.modal_text_2}>&#x025AB; Lote   :</Text>
                            <Text style={Styles.modal_text_2}>&#x025AB; Doses  :  {Item.DOSES}</Text>
                            <Text style={Styles.modal_text_2}>&#x025AB; Vacina :  {Item.VACINAS}</Text>
                            <Text style={Styles.modal_text_2}>&#x025AB; Idade   :  {Item.IDADE}</Text>
                            <Text style={Styles.modal_text_2}>&#x025AB; Data da aplicação:</Text>
                            <Text style={Styles.modal_text_2}>&#x025AB; Doenças evitadas :  {Item['DOENÇAS EVITADAS']}  </Text>
                    </View>

                    <View style={Styles.modal_button}>
                        <Fechar onPress={Close_popup} />
                    </View>
                </View>
            </Modal>
        
        </ImageBackground>
    );
}

