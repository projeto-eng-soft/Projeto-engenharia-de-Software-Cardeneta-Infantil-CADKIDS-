import { DB } from "src/firebaseConfig";
import { getDocs , collection, query  ,where} from "firebase/firestore";

export const Getcriancas = async(email) => {
    const dicionario = []
    const cursor_exe    = query(collection(DB, "Criança"),where('Email','==',email));
    const querySnapshot = await getDocs(cursor_exe);
    
    querySnapshot.forEach((doc) => {
        const dict = doc.data()
        dicionario.push(dict);
    });        
    
    return dicionario;      
}