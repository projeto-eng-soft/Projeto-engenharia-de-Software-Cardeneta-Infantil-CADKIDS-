import { StyleSheet , TouchableOpacity , View , Text } from "react-native";

export default function Button({navigation})
{
    return(
        <TouchableOpacity onPress={()=>navigation.navigate('Formulario_1')}>
            <View>
                <Text style={Style.text}>Quero me cadastrar</Text>
            </View>
        </TouchableOpacity>
    );
}

const Style = StyleSheet.create({
    text:{
        textDecorationLine:'underline',
        color   :'rgba(255, 0, 157, 0.712)',
        fontSize:14,

    }
})