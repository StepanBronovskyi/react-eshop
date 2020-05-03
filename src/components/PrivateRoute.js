import React from "react";
import {Route,Redirect} from "react-router-dom";
import * as ROUTE from '../constants/routes';
import {useAuthenticationServiceContext} from "../services/authentication/hooks";


const PrivateRoute = ({component: Component, ...rest}) => {

    const authenticationService = useAuthenticationServiceContext();

    return (
        <Route
            {...rest}
            render={
                props => {

                    const currentUser = authenticationService.currentUser;

                    if (!currentUser || !currentUser.isAdmin) {
                        return <Redirect to={ROUTE.LOGIN}/>
                    }

                    return <Component {...props} />
                }
            }
        />
    );
};

export { PrivateRoute };
