import React, { useEffect } from "react"
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const ProductList = ({ products, currentCategory, searchQuery, priceRange, sortBy, setProducts }) => {

    useEffect(() => {

    }, []);

    return (
        <List component="nav" aria-label="secondary mailbox folders">
            <ListItem button>
                <ListItemText primary="Trash" />
            </ListItem>
            <ListItem>
                <ListItemText primary="Spam" />
            </ListItem>
        </List>
    );
};

export default ProductList;