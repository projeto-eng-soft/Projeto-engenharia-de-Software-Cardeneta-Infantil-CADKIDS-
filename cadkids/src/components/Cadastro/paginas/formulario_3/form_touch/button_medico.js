import { StyleSheet , TouchableOpacity , View , Text , Image , Animated } from "react-native";

import Icon_medico from 'static/icons/icon_medico.png';

export default function Button_medico({navigation})
{
    return(
        <TouchableOpacity onPress={()=>navigation.navigate('Formulario_4')}>
            <View>
                <Text style={Style.texto}>Sou agente de saúde</Text>
                
                <View style={Style.conteiner}>
                    <Image source={Icon_medico} style={Style.icone}/>
                </View>
            </View>     
        </TouchableOpacity>
    );
}


const Style = StyleSheet.create({
    conteiner:{
        width:230
    },
    
    icone: {
        position:'absolute',
        width :44,
        height:44
    },

    texto:{
        backgroundColor   :'rgb(255, 228, 92)',
        fontSize  :10,
        fontStyle :'italic',
        position  :'absolute',
        marginTop    :14,
        marginLeft   :33,
        paddingTop   :3,
        paddingBottom:3,
        paddingRight :9,
        paddingLeft  :14,
        borderTopRightRadius   :13,
        borderBottomRightRadius:13,
    }
})