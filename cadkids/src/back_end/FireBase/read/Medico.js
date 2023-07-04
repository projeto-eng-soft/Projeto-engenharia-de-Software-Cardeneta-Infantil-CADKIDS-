import { FireApp }                             from "src/firebaseConfig";
import { getAuth ,signInWithEmailAndPassword } from "firebase/auth";


export function readMedico(email,password,navigation){
    const auth = getAuth(FireApp);
    
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        navigation.navigate('Medico',{Email:email});
    })
    .catch((error) => {
        alert(error.code+"\n"+error.message);
    });
}