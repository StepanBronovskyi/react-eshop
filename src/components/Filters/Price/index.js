import React, {useEffect, useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { useFirebase } from "../../../firebase/hooks";

const useStyles = makeStyles({
    root: {
        width: 300,
    },
});

const PriceFilter = ({ setPriceRange }) => {

    const classes = useStyles();
    const [value, setValue] = useState([0, 100000]);
    const [scopes, setScopes] = useState([0, 100000]);
    const firebase = useFirebase();

    useEffect(() => {
        const getPriceScopes = async () => {
            const result = await firebase.getProductPriceScopes();
            setScopes(result);
            setValue(result);
        };
        getPriceScopes();
    }, []);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        setPriceRange(newValue);
    };

    return (
        <div className={classes.root}>
            <Typography id="price-range" gutterBottom>
                Price
            </Typography>
            <Slider
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="price-range"
                min={scopes[0]}
                max={scopes[1]}
            />
        </div>
    );
};

export default PriceFilter;
