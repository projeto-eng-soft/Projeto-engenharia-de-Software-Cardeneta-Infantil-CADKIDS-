import { DB }                       from "src/firebaseConfig";
import { collection, query, where, getDocs, doc , updateDoc}  from "firebase/firestore";
import { CommonActions }            from "@react-navigation/native";
import { useRoute }           from "@react-navigation/native";

export const AplicarVacina = async(data, navigation) =>{

    console.log("Aplicar Vacina")
    console.log(data.vacina)

    updateDoc(
        doc(collection(doc(DB, "Criança", data.userId), "Vacinas"), data.vacina), {
            status: data.status,
            lote: data.lote,
            data_aplicacao: data.DataAplicacao
        }
    ).then(() => {
        navigation.dispatch(
            CommonActions.reset({
                index: 1 ,
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

    // querySnapshot.forEach((doc) => {
    //     updateDoc(
    //         doc(collection(doc(DB, "Criança", data.userId), "Vacinas"), doc.id), {
    //             status: data.status,
    //             lote: data.lote,
    //             data_aplicacao: data.DataAplicacao
    //         }
    //     ).then(async() => {
    //         navigation.dispatch(
    //             CommonActions.reset({
    //                 index:0,
    //                 routes:[
    //                     { 
    //                         name:'VacinasAplicadasMedico',
    //                         params: {
    //                             ...data.params
    //                         }
    //                     },
    //                 ]
    //             })
    //         )
    //     }).catch((error)=>{ 
    //         alert('Invalido'+error.message);
    //     });
    // });
}