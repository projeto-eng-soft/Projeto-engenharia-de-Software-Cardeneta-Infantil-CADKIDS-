import { DB } from "src/firebaseConfig";
import { getDocs,doc ,collection ,query ,orderBy ,where } from "firebase/firestore";

export const Getvacinas_12 = async() => {
    const dicionario = []
    const cursor_exe    = query(collection(DB, "vacinas_ate_5anos"),orderBy('index'));
    const querySnapshot = await getDocs(cursor_exe);
    
    querySnapshot.forEach((doc) => {
        const dict = doc.data()
        dicionario.push(dict);
    });        
    return dicionario;      
}

export const Getvacinas_crianca = async(userId) => {
    console.log(userId)
    const dicionario = []
    const docRef        = collection(DB,'Criança')
    const cursor_exe    = query(collection(collection(doc(DB, "Criança",docRef.id), "Vacinas")),orderBy('index'));
    const querySnapshot = await getDocs(cursor_exe);
    
    querySnapshot.forEach((doc) => {
        const dict = doc.data()
        dicionario.push(dict);
    });        
    return dicionario;      
}