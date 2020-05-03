import React, {useState} from "react";
import MenuItem from "@material-ui/core/MenuItem";
import {Link} from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import Menu from "@material-ui/core/Menu";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircle from "@material-ui/icons/AccountCircle";
import {fade, makeStyles} from "@material-ui/core/styles";
import MoreIcon from "@material-ui/icons/MoreVert";
import { useAuthenticationServiceContext } from "../../services/authentication/hooks";

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
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


const AccountMenu = () => {

    const authenticationService = useAuthenticationServiceContext();

    const classes = useStyles();

    const [anchorEl, setAnchorEl] = useState(null);

    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const isMenuOpen = Boolean(anchorEl);

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleLogout = () => {
        handleMenuClose();
        authenticationService.logout();
    };

    const currentUser = authenticationService.currentUser;

    const renderMyAccount = currentUser && (
        <MenuItem onClick={handleMenuClose}>
            <Link
                to={
                    currentUser.isAdmin ? ROUTES.ADMIN : ROUTES.CATALOG
                }
                className={classes.accountLink}
            >
                { currentUser.isAdmin ? 'Admin' : 'Account' }
            </Link>
        </MenuItem>
    );

    const renderLogin = !authenticationService.currentUser && (
        <MenuItem onClick={handleMenuClose}>
            <Link to={ROUTES.LOGIN} className={classes.accountLink}>
                Login
            </Link>
        </MenuItem>
    );

    const renderLogout = authenticationService.currentUser && (
        <MenuItem
            onClick={handleLogout}
        >
            Logout
        </MenuItem>
    );

    const menuId = 'primary-search-account-menu';

    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            { renderMyAccount }
            { renderLogin }
            { renderLogout }
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';

    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton aria-label="show 11 new notifications" color="inherit">
                    <Badge badgeContent={11} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    return (
        <React.Fragment>
            <div className={classes.sectionDesktop}>
                <IconButton
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                    color="inherit"
                >
                    <AccountCircle/>
                </IconButton>
            </div>
            <div className={classes.sectionMobile}>
                <IconButton
                    aria-label="show more"
                    aria-controls={mobileMenuId}
                    aria-haspopup="true"
                    onClick={handleMobileMenuOpen}
                    color="inherit"
                >
                    <MoreIcon/>
                </IconButton>
            </div>
            {renderMobileMenu}
            {renderMenu}
        </React.Fragment>
    );
};

export default AccountMenu;
