import React, {useRef, useState} from "react";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import {fade, makeStyles} from "@material-ui/core/styles";
import ResultProductList from "../../containers/Search/ResultProductList";
import { useHistory, useLocation } from 'react-router-dom';
import * as ROUTES from "../../constants/routes";

const useStyles = makeStyles((theme) => ({
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        color: 'white',
        marginLeft: '-20px',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

const Search = ({ searchQuery, setSearchQuery }) => {

    const classes = useStyles();

    const history = useHistory();

    const location = useLocation();

    const inputSearch = useRef(null);

    const [resultVisible, setResultVisible] = useState(null);

    let timeout = 0;

    const handleChange = (event) => {
        const query = event.target.value;

        if (timeout) clearInterval(timeout);

        timeout = setTimeout(() => {
            setSearchQuery(query);
        }, 1000);
    };

    const handleSearch = () => {
        history.push(ROUTES.CATALOG);
    };

    const isCatalog = () => location.pathname !== ROUTES.CATALOG;

    const resultProductList = searchQuery && isCatalog() && (
        <ResultProductList parentRef={ inputSearch } resultVisible={ resultVisible } />
    );

    return (
        <React.Fragment>
            <div className={classes.search} ref={ inputSearch }>
                <InputBase
                    placeholder="Search…"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={ handleChange }
                    onFocus={ () => setResultVisible(true) }
                    onBlur={ () => setResultVisible(false) }
                />
            </div>
            <IconButton
                className={ classes.searchIcon }
                onClick={ handleSearch }
            >
                <SearchIcon aria-hidden={false}/>
            </IconButton>

            { resultProductList }
        </React.Fragment>
    );
};

export default Search;
