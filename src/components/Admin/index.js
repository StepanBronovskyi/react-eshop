import React from "react";
import { Switch, Route } from "react-router-dom";
import Product from "./Product";
import Category from "./Category";
import Navigation from "./Navigation";
import * as ROUTES from "../../constants/routes";


const Admin = () => {

    return (
        <React.Fragment>
            <Navigation />
            <Switch>
                <Route exact path={ ROUTES.ADMIN_PRODUCTS }>
                    <Product />
                </Route>
                <Route path={ ROUTES.ADMIN_CATEGORIES }>
                    <Category/>
                </Route>
            </Switch>
        </React.Fragment>
    );
};

export default Admin;
