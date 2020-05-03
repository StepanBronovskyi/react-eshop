import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useFirebase } from "../../firebase/hooks";

const useStyles = makeStyles(theme => ({
    typography: {
        padding: theme.spacing(2),
    },
    resultItem: {
        padding: '5px 30px',
        borderBottom: '1px solid #3F51B5',
    },
    resultContainer: {
        border: '2px solid #3F51B5',
        borderRadius: '5px',
        backgroundColor: 'lightcyan',
    }
}));

const ResultProductList = ({ searchQuery, parentRef, resultVisible }) => {

    const classes =  useStyles();

    const firebase = useFirebase();

    const [searchProducts, setSearchProducts] = useState(null);

    useEffect(() => {
        searchQuery && firebase.searchProducts(searchQuery).then(result => {
            setSearchProducts(result);
        });
    }, [searchQuery]);

    const formatPrice = (price) => '  ' +  price + '$';

    const searchList = resultVisible && searchQuery && searchProducts && searchProducts.map((product, index) => {
        return (
            <ListItem
                href="#simple-list"
                key={ index }
            >
                <img src={ product.image ? product.imge : "no_image.png"} height="50px"/>
                <ListItemText
                    primary={ product.name + formatPrice(product.price)}
                    className={ classes.resultItem }
                />
            </ListItem>
        );
    });

    const open = resultVisible && Boolean(searchQuery) && Boolean(searchProducts) && Boolean(searchProducts.length);
    const id =  open ? 'simple-popover' : undefined;

    return (
        <div>
            <Popper
                id={id}
                open={open}
                anchorEl={parentRef.current}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <List
                    component="nav"
                    aria-label="secondary mailbox folders"
                    className={ classes.resultContainer }
                >
                    { searchList }
                </List>
            </Popper>
        </div>
    );
};

export default ResultProductList;
