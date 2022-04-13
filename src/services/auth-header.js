export default function authHeader(){
    // return authorization header with jwt token
    let user = JSON.parse(localStorage.getItem('user'));

    if(user && user.accessToken && user.refreshToken){
        return {
            'Authorization': 'Bearer ' + user.accessToken,
            'x-refresh ' : user.refreshToken
        };
       
    }
    else{
        return {};
    }
}