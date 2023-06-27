import { DB } from "src/firebaseConfig";
import { getDocs , collection, query , orderBy } from "firebase/firestore";

export const GetMarcos = async() => {
    const dicionario = []
    const cursor_exe    = query(collection(DB, "desenvolvimento"),orderBy('index'));
    const querySnapshot = await getDocs(cursor_exe);
    
    querySnapshot.forEach((doc) => {
        const dict = doc.data()
        dicionario.push(dict);
    });        
    return dicionario;      
}