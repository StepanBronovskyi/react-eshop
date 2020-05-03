import React from "react";
import { connect } from "react-redux"
import App from '../components/App'
import { setProducts } from "../actions/product";

const mapStateToProps = ({ product }) => ({
    items: product.items ? product.items : null
});

const mapDispatchToProps = dispatch => ({
    setProducts: products => dispatch(setProducts(products))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);