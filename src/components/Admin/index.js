import React from "react";
import { Switch, Route } from "react-router-dom";
import Product from "./Product";
import Category from "./Category";

const Admin = () => {

    return (
        <Switch>
            <Route exact path="/products">
                <Product/>
            </Route>
            <Route path="/categories">
                <Category/>
            </Route>
        </Switch>
    );
};

export default Admin;
