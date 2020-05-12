import React from 'react';
import { Link } from 'react-router-dom'
import Search from "../../containers/Search";
import * as ROUTES from '../../constants/routes'
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import AccountMenu from "./AccountMenu";
import {useAuthenticationServiceContext} from "../../services/authentication/hooks";

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    link: {
        textDecoration: 'none',
        color: 'white',
        display: 'block',
        marginRight: '20px',
    },
    accountLink: {
        textDecoration: 'none',
        color: 'black',
        display: 'block',
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

const Navigation = () => {
    const classes = useStyles();

    const authenticationService = useAuthenticationServiceContext();

    const renderAdminUrl = () => {

        return authenticationService.currentUser.isAdmin && (
            <Link to={ROUTES.ADMIN}>
                <Typography className={classes.link} variant="h6" noWrap>
                    Admin
                </Typography>
            </Link>
        );
    };

    return (
        <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Link to={ROUTES.HOME}>
                        <Typography className={classes.link} variant="h6" noWrap>
                            Home
                        </Typography>
                    </Link>
                    <Link to={ROUTES.CATALOG}>
                        <Typography className={classes.link} variant="h6" noWrap>
                            Catalog
                        </Typography>
                    </Link>

                    { renderAdminUrl() }

                    <Search/>

                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <IconButton aria-label="show 4 new mails" color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <MailIcon />
                            </Badge>
                        </IconButton>
                        <IconButton aria-label="show 17 new notifications" color="inherit">
                            <Badge badgeContent={17} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                    </div>
                    <AccountMenu/>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navigation;
