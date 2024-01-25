import { getDocs, collection } from "firebase/firestore";
import db from ".";

export const fetchItems = async (collectionName) => {
    const doc_refs = await getDocs(collection(db, collectionName));

    const res = []

    doc_refs.forEach(item => {
        res.push({
            id: item.id, 
            ...item.data()
        })
    })
    
    return res
}