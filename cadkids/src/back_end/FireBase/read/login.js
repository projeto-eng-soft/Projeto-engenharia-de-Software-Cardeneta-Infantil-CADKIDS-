import { FireApp }                             from "src/firebaseConfig";
import { getAuth ,signInWithEmailAndPassword } from "firebase/auth";


export function readCliente(email,password,navigation){
    const auth = getAuth(FireApp);
    
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        navigation.navigate('home_Criança');
    })
    .catch((error) => {
        alert(error.code+"\n"+error.message);
    });
}