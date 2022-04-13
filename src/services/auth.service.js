import axios from 'axios';
class AuthService{
    async login(user){
        const response = await axios.post("http://localhost:8989/api/session", {
            email: user.email,
            password: user.password
        });
        if (response.data.accessToken && response.data.refreshToken) {
            localStorage.setItem('user', JSON.stringify(response.data));
            
        }
        else{
            throw new Error('Invalid credentials to login');

        }
        return response.data;
    }

    getUser(){
        const user = axios.get("http://localhost:8989/api/users/me", {}, {
            headers: {
                Authorization: `Bearer ${user.data.accessToken}`}
        });

        if(!user){
            throw new Error('Invalid credentials to login');
        }
        return user.data;

    }
    logout(){
        localStorage.removeItem('user');
    }
    async register(user){
        return await axios.post("http://localhost:8989/api/users", {
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            password: user.password,
            passwordConfirmation: user.passwordConfirmation
        });
        
    }
}

export default new AuthService();

