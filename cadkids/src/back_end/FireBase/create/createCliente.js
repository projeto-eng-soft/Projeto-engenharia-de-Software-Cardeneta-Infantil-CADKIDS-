import { DB } from 'src/firebaseConfig';
import {addDoc,collection} from 'firebase/firestore'


export function createCliente(data){
    addDoc(
        collection(DB,'Cliente'),data
    );
}