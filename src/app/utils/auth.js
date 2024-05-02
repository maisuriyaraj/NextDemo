export const isLoggedIn = () => {
    let isUserAuth = JSON.parse(localStorage.getItem('AuthToken')) || null;
    if(isUserAuth == null){
        return false;
    }else{
        return true;
    }
}