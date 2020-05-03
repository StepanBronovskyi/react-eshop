import PriceFilter from "../../../components/Filters/Price";
import { connect } from "react-redux";
import { setPriceRange } from "../../../actions/filter";


const mapDispatchToProps = dispatch => ({
    setPriceRange: range => dispatch(setPriceRange(range))
});

export default connect(null, mapDispatchToProps)(PriceFilter);
