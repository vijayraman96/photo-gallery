import React, {useState} from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const types = ['image/png', 'image/jpeg', 'image/jpg'];
    const changeHandler = (e) => {
        e.preventDefault();
        let selected = e.target.files[0];
        console.log(selected);
        if(selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');
        } else {
            setFile(null);
            setError('Please import the valid image format (png, jpeg or jpg');
        }
    }
    return (
        <form>
            <input type="file" onChange= {changeHandler}></input>
            <span>+</span>
            {error && <div className="error">{error}</div>}
            {file && <div className="file-type">{file.name}</div> }
            {file && <ProgressBar file={file} setFile={setFile} />}
        </form>
    )
}

export default UploadForm;