import React, { useEffect, useContext } from 'react';
import  {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./Home";
import Catalog from "./Catalog";
import Admin from "./Admin";
import * as ROUTES from "../constants/routes"
import Navigation from "./Navigation";
import Container from '@material-ui/core/Container';
import FirebaseContext from "../firebase/context";
import LoginForm from "./Account/LoginForm";
import { PrivateRoute } from "./PrivateRoute";

const App = () => (
    <Router>
        <div id="App">
            <Container maxWidth="lg">
                <Navigation/>
                <Switch>
                    <Route exact path={ ROUTES.HOME }>
                        <Home/>
                    </Route>
                    <Route path={ROUTES.CATALOG}>
                        <Catalog/>
                    </Route>
                    <PrivateRoute path={ROUTES.ADMIN} component={Admin}/>
                    <Route path={ROUTES.LOGIN}>
                        <LoginForm/>
                    </Route>
                </Switch>
            </Container>
        </div>
    </Router>
);

export default App;
