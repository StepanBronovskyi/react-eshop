import { useContext } from 'react';
import AuthenticationServiceContext from "./authenticationServiceContext";

const useAuthenticationServiceContext = () => {
    return useContext(AuthenticationServiceContext);
};

export { useAuthenticationServiceContext };
