import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { Provider } from 'react-redux';
import store from './store'
import FirebaseContext from "./firebase/context";
import Firebase from "./firebase/firebase";
import AuthenticationServiceContext from "./services/authentication/authenticationServiceContext";
import AuthenticationService from "./services/authentication/authenticationService";

ReactDOM.render(
    <AuthenticationServiceContext.Provider value={new AuthenticationService()}>
        <FirebaseContext.Provider value={new Firebase()}>
            <Provider store={store}>
                <App />
            </Provider>
        </FirebaseContext.Provider>
    </AuthenticationServiceContext.Provider>,
  document.getElementById('root')
);
