import Sort from "../../../components/Filters/Sort";
import { connect } from "react-redux";
import { setSortBy } from "../../../actions/filter";

const mapStateToProps = ({ filter }) => ({
    sortBy: filter.sortBy
});
const mapDispatchToProps = dispatch => ({
    setSortBy: sortBy => dispatch(setSortBy(sortBy))
});

export default connect(mapStateToProps, mapDispatchToProps)(Sort);
