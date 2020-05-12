import React, { useEffect, useState } from "react";
import { useFirebase } from "../../firebase/hooks";
import ProductItem from "./ProductItem";
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';


const ProductListDump = ({ products, currentCategory, searchQuery, priceRange, sortBy, setProducts }) => {

    const firebase = useFirebase();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        firebase.getProducts(currentCategory, priceRange, searchQuery, sortBy).then(result => {
            setProducts(result);
            setLoading(false);
        });
    }, [currentCategory, searchQuery, priceRange, sortBy]);

    const productList = products && products.map((product, index) => {
        return (
            <Grid item xs={3} key={index}>
                <ProductItem product={product}/>
            </Grid>
        );
    });

    return (
        <React.Fragment>
            <Grid container spacing={3}>
                { loading ? <CircularProgress disableShrink /> : productList }
            </Grid>
        </React.Fragment>
    );
};

export default ProductListDump;
