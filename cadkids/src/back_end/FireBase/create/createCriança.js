import { DB }                     from 'src/firebaseConfig';
import { addDoc  ,collection ,doc}    from 'firebase/firestore';
import { Getvacinas_12 } from '../read/Getvacinas';

export function createCrianca(data,navigation)
{
    
    addDoc(
        collection(DB,'Criança'),data
    ).then(async()=> {
        const valores   = await Getvacinas_12();
        const collecRef = collection(doc(DB, "Criança", data.Email), "Vacinas");
        
        for(let i=0;i<valores.length;i++){ addDoc(collecRef,valores[i]); }
        navigation.navigate('Inicio_crianca',{Email:data.Email});
    }
    ).catch((error)=>{ 
        alert('Invalido'+error.message);
    });
}