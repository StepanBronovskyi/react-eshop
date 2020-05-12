import React from "react";
import { Switch, Route } from "react-router-dom";
import { withProducts } from "../../containers/ProductList/withProducts";
import ProductListDump from "./ProductList";
import Category from "./Category";
import Navigation from "./Navigation";
import * as ROUTES from "../../constants/routes";

const ProductList = withProducts(ProductListDump);

const Admin = () => {

    return (
        <React.Fragment>
            <Navigation />
            <Switch>
                <Route exact path={ ROUTES.ADMIN_PRODUCTS }>
                    <ProductList />
                </Route>
                <Route path={ ROUTES.ADMIN_CATEGORIES }>
                    <Category/>
                </Route>
            </Switch>
        </React.Fragment>
    );
};

export default Admin;
