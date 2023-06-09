import { DB }                             from 'src/firebaseConfig';
import { addDoc  ,collection }                     from 'firebase/firestore';
export function createCrianca(data,navigation){
    addDoc(
        collection(DB,'Criança'),data
    ).then(()=> {
        navigation.navigate('Inicio_crianca',{Email:data.Email});
    }
    ).catch((error)=>{ 
        alert('Invalido'+error.message);
    });
}