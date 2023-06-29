import { DB }                       from 'src/firebaseConfig';
import { addDoc  ,collection ,doc}  from 'firebase/firestore';
import { Getvacinas_12 }            from '../read/Getvacinas';

import { CommonActions } from '@react-navigation/native';
export function createCrianca(data,navigation)
{
    const docRef = collection(DB,'Criança')
    addDoc(
        docRef,data
    ).then(async(docRef) => {
        const valores   = await Getvacinas_12();
        const collecRef = collection(doc(DB, "Criança",docRef.id), "Vacinas");
        
        for(let i=0;i<valores.length;i++) addDoc(collecRef,valores[i]); 

        navigation.dispatch(
            CommonActions.reset({
                index:0,
                routes:[
                    { name:'Inicio_crianca' },
                ]
            })
        )

    }).catch((error)=>{ 
        alert('Invalido'+error.message);
    });
}