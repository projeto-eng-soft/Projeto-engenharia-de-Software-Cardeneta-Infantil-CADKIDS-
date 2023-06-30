import { DB }                                  from "src/firebaseConfig";

import { FireApp }                             from "src/firebaseConfig";
import { getAuth ,signInWithEmailAndPassword } from "firebase/auth";
import { getDocs , collection, query  ,where}  from "firebase/firestore";

export const Getcliente = async(email,navigation) => {
    const cursor_exe    = query(collection(DB, "Cliente"),where('Cpf_Dominio','==',email));
    const querySnapshot = await getDocs(cursor_exe);

    querySnapshot.forEach((doc) => {
        const dict = doc.data();
        const userId = doc.id
        navigation.navigate('home_Criança',{Email:email,dadosUser:dict,userId:userId});

    });        
}

export const readCliente = (email,password,navigation) =>{
    const auth  = getAuth(FireApp);
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const dados = Getcliente(email,navigation);
    })
    .catch((error) => {
        alert(error.code+"\n"+error.message);
    });
}