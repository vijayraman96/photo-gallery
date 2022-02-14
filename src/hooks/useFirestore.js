import React, {useState, useEffect} from 'react';
import { projectFireStore } from '../firebase/config';
import {collection, getDocs, doc, getDoc, query, orderBy} from 'firebase/firestore';

const useFirestore = (collect) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        async function fetchingData () {
            const docRef = query(collection(projectFireStore, collect), orderBy("createdAt", "desc"));
            const querySnapshot = await getDocs(docRef);
            console.log('object',querySnapshot);
            // const querySnapshot = await getDocs(collection(projectFireStore, collect));
            // console.log(querySnapshot); 
            let documents = [];
            querySnapshot.forEach((doc) => {
                documents.push({...doc.data(), id:doc.id});
                // console.log(doc);
                // console.log(doc.id, " => ", doc.data());
                setDocs(documents);
                
            });
            console.log('array',documents);

            return () => querySnapshot();
        }
        fetchingData()
    }, [collect])
    // console.log(docs);
    return {docs};
    
}

export default useFirestore;