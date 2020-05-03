import React, { useEffect , useState } from "react";
import { useFirebase } from "../../firebase/hooks";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import CircularProgress from '@material-ui/core/CircularProgress';
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    active: {
        textDecoration: 'underline',
        marginLeft: '5px',
    },
});

const Menu = ({ categories, setCategories, currentCategory, setCurrentCatalogCategory }) => {

    const firebase = useFirebase();

    const styles = useStyles();

    const [loading, setLoading] = useState(true);

    const [parentCategory, setParentCategory] = useState(undefined);

    useEffect(() => {
        firebase.getCategories(currentCategory).then(result => {
            if(result)
                setCategories(result);
            setLoading(false);
        }).then(() => {
            if(currentCategory) {
                if (currentCategory.parent) {
                    firebase.getParentCategory(currentCategory).then(parentCategory => {
                        setParentCategory(parentCategory);
                    });
                }
                else {
                    setParentCategory(null);
                }
            }
            else {
                setParentCategory(undefined);
            }
        });
    }, [currentCategory]);

    const sidebarMenu = categories && categories.map((category, index) => {
        return (
            <ListItem button key={index} onClick={ () => setCurrentCatalogCategory(category) }>
                <ListItemText primary={category.name} className={ currentCategory && category.key === currentCategory.key ? styles.active : '' }/>
            </ListItem>
        );
    });

    const backButton = (typeof parentCategory !== 'undefined') && (
        <ListItem button onClick={ () => setCurrentCatalogCategory(parentCategory) }>
            <ListItemText primary="Back"/>
        </ListItem>
    );

    return (
        <React.Fragment>
            <Typography variant="h5" gutterBottom>
                Categories
            </Typography>
            <List>
                { loading ? <CircularProgress disableShrink /> : null }
                { backButton }
                { sidebarMenu }
            </List>
        </React.Fragment>
    );
};

export default Menu;
