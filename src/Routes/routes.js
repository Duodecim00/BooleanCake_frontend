import axios from "axios";

function registerPost(data) {
    axios.post("https://....", data)
    .then((res) => {
        console.log(res.data);
    })
    .catch((err) => console.log(err));
}



export {
    registerPost,
}