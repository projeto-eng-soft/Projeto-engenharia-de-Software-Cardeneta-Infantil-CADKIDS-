import { DB }                     from 'src/firebaseConfig';
import { addDoc  ,collection ,doc}    from 'firebase/firestore';
import { Getvacinas_12 } from '../read/Getvacinas';

export function createCrianca(data,navigation)
{
    const docRef = collection(DB,'Criança')
    addDoc(
        docRef,data
    ).then(async(docRef)=> {
        const valores   = await Getvacinas_12();
        const collecRef = await collection(doc(DB, "Criança",docRef.id), "Vacinas");
        
        for(let i=0;i<valores.length;i++){ 
            addDoc(collecRef,valores[i]); 
        }
        navigation.navigate('Inicio_crianca',{Email:data.Email});
    }
    ).catch((error)=>{ 
        alert('Invalido'+error.message);
    });
}