class AuthenticationService {

    constructor() {
        this.currentUser = localStorage.getItem('currentUser');
    }

    login = user => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUser = user;
    };

    logout = () => {
        localStorage.removeItem('currentUser');
        this.currentUser = null;
    };
}

export default AuthenticationService;
