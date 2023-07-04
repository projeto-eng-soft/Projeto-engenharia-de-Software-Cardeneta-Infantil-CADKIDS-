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
    const dicionario = []
<<<<<<< HEAD
    const docRef        = collection(DB,'Criança')
    const cursor_exe    = query(collection(collection(doc(DB, "Criança",docRef.id), "Vacinas")),orderBy('index'));
=======
    const collecRef = collection(doc(DB, "Criança", userId), "Vacinas");
    const cursor_exe    = query((collecRef));
>>>>>>> 16fd49ae82d9cf7c7da9f39a1cb936438ed2ff1c
    const querySnapshot = await getDocs(cursor_exe);
    
    querySnapshot.forEach((doc) => {
        const dict = doc.data()
        dicionario.push(dict);
    });
    return dicionario;      
}