import { DB }                       from "src/firebaseConfig";
import { FireApp }                  from "src/firebaseConfig";
import { setDoc , collection ,doc}  from "firebase/firestore";
import { CommonActions }            from "@react-navigation/native";

export const updateCliente = async(data,userId,navigation) =>{
    console.log(data)
    const docRef = doc(DB,'Cliente',userId)
    setDoc(
        docRef,data
    ).then(()=>{
        alert('Voce irá retornar a pagina de login')
        navigation.dispatch(
            CommonActions.reset({
                index:1,
                routes:[
                    { name:"Login" },
                ]
            })
        )        
    }).catch((error)=>{
        alert(error.message)
    })
}