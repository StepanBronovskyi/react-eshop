import { connect } from "react-redux";
import { setProducts } from "../../actions/product";

const mapStateToProps = ({ product, category, filter }) => ({
    products: product.items ? product.items : null,
    currentCategory: category.currentCatalogCategory ? category.currentCatalogCategory : null,
    searchQuery: filter.searchQuery,
    priceRange: filter.priceRange ? filter.priceRange : null,
    sortBy: filter.sortBy
});

const mapDispatchToProps = dispatch => ({
    setProducts: products => dispatch(setProducts(products))
});

const withProducts = (Component) => {
    return connect(mapStateToProps, mapDispatchToProps)(Component);
};

export { withProducts };