import React from 'react'
import ProductListDump from "./ProductList";
import { withProducts } from "../../../containers/ProductList/withProducts";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const ProductList = withProducts(ProductListDump);

const Product = () => (

    <Grid container spacing={3}>
        <Grid item xs={3}>
        </Grid>
        <Grid item xs={9}>
            <ProductList />
        </Grid>
    </Grid>
);

export default Product;