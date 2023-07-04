import { TouchableOpacity , View,Text} from "react-native";


export default function Confirma({onPress}){

    return(
        <TouchableOpacity onPress={onPress} style={{marginTop:10,right:10}}>
            <View style={{backgroundColor:'green' ,width:50,borderRadius:10,alignItems:'center'}}>
                <Text style={{fontSize:20}}>Sim</Text>
            </View>
        </TouchableOpacity>
    )
}

