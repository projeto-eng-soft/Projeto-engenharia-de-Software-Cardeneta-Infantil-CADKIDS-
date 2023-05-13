import { StyleSheet, TouchableOpacity, View, Text } from "react-native";


export default function Button({navigation})
{
    return(
        <TouchableOpacity onPress={()=>navigation.navigate('Formulario_3')}>
            <View>
                <Text style={Style.text}>Continuar</Text>
            </View>
        </TouchableOpacity>
    );
}

const Style = StyleSheet.create({
    text:{
        backgroundColor:'rgb(31, 138, 239)',
        color:'white',
        fontSize:16,
        padding     :10,
        paddingLeft :14,
        paddingRight:14,
        borderRadius:19,
    
    }
})