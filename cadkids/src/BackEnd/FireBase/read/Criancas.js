import { DB } from "src/firebaseConfig";
import { getDocs , collection, query  ,where} from "firebase/firestore";

export const Getcriancas = async(email) => {
    const dicionario = []
    const cursor_exe    = query(collection(DB, "Criança"),where('Email','==',email));
    const querySnapshot = await getDocs(cursor_exe);

    querySnapshot.forEach((doc) => {
        const dict = doc.data();
        dict['id'] = doc.id;
        dicionario.push(dict);
    });        
    return dicionario;      
}

export const Getcrianca_medico = async(numero,navigation) => {
    const cursor_exe    = query(collection(DB, "Criança"),where('Certidao','==',numero));
    const querySnapshot = await getDocs(cursor_exe);

    querySnapshot.forEach((doc) => {
        navigation.navigate('MedicoCrianca',{userId:doc.id,dados:doc.data()});
    });        

}