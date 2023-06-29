import { StyleSheet , TouchableOpacity, View, Text } from "react-native";


export default function Button({onPress})
{
    return(
        <TouchableOpacity onPress={onPress}>
            <View>
                <Text style={Style.text}>Criar conta</Text>
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
        borderRadius:10,
    }
})