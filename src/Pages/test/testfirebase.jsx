import { useState } from "react"
import { uploadFile } from "../../firebase/config"

function Testfb(){
const [file, setFile ] = useState(null);

const handleSubmit = async (e) =>{
    e.preventDefault();
    try {
        const result = await uploadFile(file);
        console.log(result);
    } catch(error){
        console.error(error);
    }

    console.log('uploading');
}
    return(
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="file" name="" id="" onChange={e => setFile(e.target.files[0])}></input>
                </div>
                <button>Upload</button>
            </form>
        </>
    )
}

export default Testfb
