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


export const GetvacinasCrianca = async(userId,type) =>{
    const dicionario    = []
    const collecRef     = collection(doc(DB, "Criança", userId), "Vacinas");
    const cursor_exe    = query((collecRef),orderBy('index'));
    const querySnapshot = await getDocs(cursor_exe);
    
    querySnapshot.forEach((doc) => {
        const dict = doc.data()
        if (type == 0){
            if (dict.status == true ) dicionario.push(dict);
        }else{
            if (dict.status == false) dicionario.push(dict)
        }
    });
    return dicionario;
}

