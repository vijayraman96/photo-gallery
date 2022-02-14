import {useState, useEffect} from 'react';
import {storageFirestore} from '../firebase/config';
import {ref, getDownloadURL, uploadBytesResumable} from 'firebase/storage';
import { doc, setDoc, Timestamp } from 'firebase/firestore';
import { projectFireStore } from '../firebase/config';

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [link, setLink] = useState(null);
    const storage = storageFirestore;
    useEffect( () => {
        const storageRef = ref(storage, file.name);
        const imageRef = ref(storage, 'images/' + file.name);
        const uploadTask = uploadBytesResumable(storageRef, file);
        // try  {
        //     const docRef = addDoc(collection(projectFireStore, 'images'), {
        //         link: link,
        //         craetedAt: 'today',
        //     });
        // } catch (err) {
        //     console.log(err);
        // }
        uploadTask.on(file , 
            (snapshot) => {
                let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setProgress(progress);
            },
            (err) => {
                setError(err);
            },
            async() => {
                const link = await getDownloadURL(storageRef);
                let projectStore = projectFireStore;
                await setDoc(doc(projectStore, 'images', file.name), {
                    link,
                    createdAt: Timestamp.fromDate(new Date()),
                });
                setLink(link);
            }
        );
    }, [file]);
    return {progress, link, error}
}

export default useStorage;