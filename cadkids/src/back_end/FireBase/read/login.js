import { DB } from "src/firebaseConfig";
import { getDoc ,collection} from "firebase/firestore";



export function readCliente(data){
    getDoc(collection(DB,'Cliente'))

}