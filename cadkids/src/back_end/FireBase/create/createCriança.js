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
<<<<<<< HEAD
        const collecRef = await collection(doc(DB, "Criança",docRef.id), "Vacinas");
        
        for(let i=0;i<valores.length;i++){ 
            addDoc(collecRef,valores[i]); 
        }
        navigation.navigate('Inicio_crianca',{Email:data.Email});
    }
    ).catch((error)=>{ 
=======
        const collecRef = collection(doc(DB, "Criança", docRef.id), "Vacinas");
        
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
>>>>>>> 16fd49ae82d9cf7c7da9f39a1cb936438ed2ff1c
        alert('Invalido'+error.message);
    });
}