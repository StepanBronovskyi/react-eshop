import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const ProductListDump = ({ products, currentCategory, searchQuery, priceRange, sortBy }) => (
    <List component="nav" aria-label="secondary mailbox folders">
        <ListItem button>
            <ListItemText primary="Trash" />
        </ListItem>
        <ListItem href="#simple-list">
            <ListItemText primary="Spam" />
        </ListItem>
    </List>
);

export default ProductListDump;