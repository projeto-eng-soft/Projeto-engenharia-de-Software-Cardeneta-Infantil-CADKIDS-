import { TouchableOpacity , View,Text} from "react-native";


export default function Negacao({onPress}){

    return(
        <TouchableOpacity onPress={onPress} style={{marginTop:10,marginBottom:10,left:10}}>
            <View style={{backgroundColor:'red',width:50,borderRadius:10,alignItems:'center'}}>
                <Text style={{fontSize:20}}>Nao</Text>
            </View>
        </TouchableOpacity>
    )
}