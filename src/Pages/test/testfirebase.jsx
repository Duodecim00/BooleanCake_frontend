import { uploadFile } from "../../firebase/config"

function Testfb(){

    return(
        <>
            <div>
                <input type="file" name="" id="" onChange={e => uploadFile(e.target.files[0])}></input>
            </div>
        </>
    )
}

export default Testfb
