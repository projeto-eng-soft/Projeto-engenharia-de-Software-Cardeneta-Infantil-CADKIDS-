import { DB }                                  from "src/firebaseConfig";
import { FireApp }                             from "src/firebaseConfig";
import { getAuth ,signInWithEmailAndPassword } from "firebase/auth";
import { getDocs , collection, query  ,where}  from "firebase/firestore";


export const Getmedico = async(email,navigation) => {
    const cursor_exe    = query(collection(DB, "Medico"),where('CpfDominio','==',email));
    const querySnapshot = await getDocs(cursor_exe);

    querySnapshot.forEach((doc) => {
        const dict = doc.data();
        const userId = doc.id
        navigation.navigate('Medico',{dadosUser:dict,userId:userId});

    });      
}

export function readMedico(email,password,navigation){
    const auth = getAuth(FireApp);
    
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        Getmedico(email,navigation)
    })
    .catch((error) => {
        alert(error.code+"\n"+error.message);
    });
}