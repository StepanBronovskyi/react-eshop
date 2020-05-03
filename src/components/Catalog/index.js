import React from "react";
import Menu from "../../containers/Menu";
import ProductList from "../../containers/ProductList";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Filters from "../Filters";
import Sort from "../../containers/Filters/Sort";
import CatalogErrorBoundary from "./CatalogErrorBoundary";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    }
}));

const Catalog = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <CatalogErrorBoundary>
                    <Grid item xs={3}>
                        <Menu/>
                        <Filters/>
                    </Grid>
                    <Grid item xs={9}>
                        <Sort/>
                        <ProductList/>
                    </Grid>
                </CatalogErrorBoundary>
            </Grid>
        </div>
    );
}

export default Catalog;
