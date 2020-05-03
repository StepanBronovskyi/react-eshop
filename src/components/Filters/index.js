import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import PriceFilter from "../../containers/Filters/Price";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

const Filters = () => {

    return (
        <React.Fragment>
            <Typography variant="h5" gutterBottom>
                Filters
            </Typography>
            <List component="nav" aria-label="secondary mailbox folders">
                <ListItem button>
                    <PriceFilter/>
                </ListItem>
            </List>
        </React.Fragment>
    );
};

export default Filters;
