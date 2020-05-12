import React from "react"
import { Link } from "react-router-dom";
import * as ROUTES from "../../../constants/routes"
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    link: {
        textDecoration: 'none',
    },
    linkText: {
        color: '#3f51b5',
        display: 'block',
        marginRight: '20px',
    },
}));

const Navigation = () => {
    const classes = useStyles();
    return (
        <Toolbar>
            <Link to={ROUTES.ADMIN_PRODUCTS} classes={classes.link}>
                <Typography className={classes.linkText} variant="h6" noWrap>
                    Products
                </Typography>
            </Link>
            <Link to={ROUTES.ADMIN_CATEGORIES} classes={classes.link}>
                <Typography className={classes.linkText} variant="h6" noWrap>
                    Categories
                </Typography>
            </Link>
        </Toolbar>
    );
};

export default Navigation;
