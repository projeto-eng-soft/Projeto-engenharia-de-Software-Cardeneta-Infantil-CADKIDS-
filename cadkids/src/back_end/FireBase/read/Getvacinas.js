import { DB } from "src/firebaseConfig";
import { getDocs , collection, query , orderBy } from "firebase/firestore";

export const Getvacinas_12 = async() => {
    const dicionario = []
    const cursor_exe    = query(collection(DB, "vacinas_ate_12meses"),orderBy('index'));
    const querySnapshot = await getDocs(cursor_exe);
    
    querySnapshot.forEach((doc) => {
        const dict = doc.data()
        dicionario.push(dict);
    });        
    return await dicionario;      
}