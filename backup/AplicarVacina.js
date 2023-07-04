import { DB }                       from "src/firebaseConfig";
import { collection, query, where, getDocs, doc , updateDoc}  from "firebase/firestore";
import { CommonActions }            from "@react-navigation/native";
import { useRoute }           from "@react-navigation/native";

export const AplicarVacina = async(data, navigation) =>{

    const vaccine = query(collection(doc(DB, "Criança", data.userId), "Vacinas"), where("VACINA", "==", data.vacina));

    const querySnapshot = await getDocs(vaccine);

    querySnapshot.forEach((doc) => {
        // console.log(doc.id)
        updateDoc(
            doc.id, {
                status: data.status,
                lote: data.lote,
                data_aplicacao: data.DataAplicacao
            }
        )
        .then(async() => {
            navigation.dispatch(
                CommonActions.reset({
                    index:0,
                    routes:[
                        { 
                            name:'VacinasAplicadasMedico',
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
    });
    // navigation.dispatch(
    //     CommonActions.reset({
    //         index:0,
    //         routes:[
    //             { 
    //                 name:'VacinasAplicadasMedico',
    //                 data: data.params
    //             },
    //         ]
    //     })
    // )
}