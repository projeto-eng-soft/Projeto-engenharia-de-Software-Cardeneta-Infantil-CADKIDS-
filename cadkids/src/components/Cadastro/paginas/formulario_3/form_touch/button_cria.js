import { StyleSheet , TouchableOpacity, View, Text } from "react-native";


export default function Button({onPress})
{
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={Style.view}>
                <Text style={Style.text}>Criar conta</Text>
            </View>
        </TouchableOpacity>
    );
}


const Style = StyleSheet.create({
    text:{
        color   :'white',
        fontSize: 15,

    },view:{
        backgroundColor:'rgb(31, 138, 239)',
        padding     :10,
        paddingLeft :14,
        paddingRight:14,
        borderRadius:10,
    }
})