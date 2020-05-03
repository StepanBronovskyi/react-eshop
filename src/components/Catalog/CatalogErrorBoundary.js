import React, { Component } from "react";
import CatalogError from "./CatalogEror";

class CatalogErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true
        });
    }

    render() {
        return this.state.hasError ? <CatalogError/> : this.props.children;
    }
}

export default CatalogErrorBoundary;
