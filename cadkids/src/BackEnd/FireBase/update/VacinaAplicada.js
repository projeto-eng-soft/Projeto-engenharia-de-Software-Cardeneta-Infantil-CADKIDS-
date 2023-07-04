import { DB }                           from "src/firebaseConfig";
import { collection, doc , updateDoc}   from "firebase/firestore";
import { CommonActions }                from "@react-navigation/native";

export const AplicarVacina = async(data , navigation) =>{

    updateDoc(
        doc(collection(doc(DB, "Criança", data.userId), "Vacinas"), data.idvacina), {
            status: data.status,
            lote: data.lote,
            data_aplicacao: data.DataAplicacao
        }
    ).then(() => {
        navigation.dispatch(
            CommonActions.reset({
                index:0,
                routes:[
                    { 
                        name:'MedicoCrianca',
                        params: {
                            ...data.params
                        }
                    },
                ]
            })
        )
    }).catch((error)=>{ 
        alert('Invalido'+error.message);
    });

}