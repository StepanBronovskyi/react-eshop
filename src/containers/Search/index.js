import Search from "../../components/Search";
import { connect } from "react-redux";
import { setSearchQuery } from "../../actions/filter";

const mapStateToProps = ({ filter }) => ({
   searchQuery: filter.searchQuery
});

const mapDispatchToProps = dispatch => ({
   setSearchQuery: query => dispatch(setSearchQuery(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
