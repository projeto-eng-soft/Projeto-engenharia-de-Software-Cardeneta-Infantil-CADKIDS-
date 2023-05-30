import { DB ,FireApp }                             from 'src/firebaseConfig';
import { addDoc  ,collection }                     from 'firebase/firestore';
import { getAuth ,createUserWithEmailAndPassword } from 'firebase/auth';

function createEmailPassword(data,navigation){
    const email    = data.Cpf_Dominio;
    const password = data.Senha;
    const auth     = getAuth(FireApp);

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        alert('Cadastrado');
        navigation.navigate('Login');
    })
    .catch((error) => {
        alert('Error: ' + error.message);
    });
}


export function createCliente(data,navigation){
    addDoc(
        collection(DB,'Cliente'),data
    ).then(()=> {
        createEmailPassword(data,navigation);
    }
    ).catch((error)=>{ 
        alert('Invalido'+error.message);
    });
}