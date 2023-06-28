import { DB }                             from 'src/firebaseConfig';
import { doc, addDoc  ,collection, setDoc }                     from 'firebase/firestore';
export function createCrianca(data,navigation){
    
//    data = data + collection(DB, 'vacinas')

    let vaccines = [
        {
            Nome: "BCG 1 dose",
            Descricao: "Previne contra poliomelite",
            Idade: 0
        },
        {
            Nome: "Febre Amarela",
            Descricao: "Previne contra febre amarela",
            Idade: 12
        }
    
    ]

    const postRef = collection("Criança", DB)
    .doc(auth.currentUser.Email)
    .collection("vacinas", DB);

    for(let i in vaccines){
        setDoc(doc(DB, postRef, i.Nome), i)
    }
    
    // addDoc(
    //     collection(DB,'Criança'),data
    // ).then(()=> {
    //     navigation.navigate('Inicio_crianca',{Email:data.Email});
    // }
    // ).catch((error)=>{ 
    //     alert('Invalido'+error.message);
    // });

    setDoc(
        doc(DB, "Criança", data.Email), data
    ).then(()=> {
        navigation.navigate('Inicio_crianca',{Email:data.Email});
    }
    ).catch((error)=>{ 
        alert('Invalido'+error.message);
    });
}