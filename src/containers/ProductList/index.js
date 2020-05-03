import React, { Component } from "react";
import ProductList from "../../components/ProductList";
import { connect } from "react-redux";
import { setProducts } from "../../actions/product";
import { setSearchQuery } from "../../actions/filter";

const mapStateToProps = ({ product, category, filter }) => ({
    products: product.items ? product.items : null,
    currentCategory: category.currentCatalogCategory ? category.currentCatalogCategory : null,
    searchQuery: filter.searchQuery,
    priceRange: filter.priceRange ? filter.priceRange : null,
    sortBy: filter.sortBy
});

const mapDispatchToProps = dispatch => ({
    setProducts: products => dispatch(setProducts(products)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
