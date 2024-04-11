import Cookies from "js-cookie";

function createCookieSession (cookieValueSession) {
    const cuca = Cookies.set('session', cookieValueSession, { expires: 7 });
    return cuca;
}
function createCookieRol (cookieValueRol) {
    const cuca = Cookies.set('rol', cookieValueRol, { expires: 7 });
    return cuca;
}
function destroyCookie (){
    Cookies.remove('session');
    Cookies.remove('rol');
}


export {
    createCookieRol,
    createCookieSession,
    destroyCookie
}