import { connect } from "react-redux";
import Menu from "../../components/Menu";
import { setCategories, setCurrentCatalogCategory } from "../../actions/category"

const mapStateToProps = ({ category }) => ({
    categories: category.items ? category.items : null,
    currentCategory: category.currentCatalogCategory ? category.currentCatalogCategory : null
});

const mapDispatchToProps = dispatch => ({
    setCategories: categories => dispatch(setCategories(categories)),
    setCurrentCatalogCategory: category => dispatch(setCurrentCatalogCategory(category))
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
