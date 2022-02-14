import React, {useEffect} from 'react';
import useStorage from '../hooks/useStorage';

const ProgressBar = ({file, setFile}) => {
    const {progress, link} = useStorage(file);
    console.log(progress, link);
    useEffect(() => {
        if(link) {
            setFile(null)
        }
    }, [link, setFile]);
    return (
        <div className="progress-bar" style={{width: progress + '%'}}></div>
    )
}

export default ProgressBar;