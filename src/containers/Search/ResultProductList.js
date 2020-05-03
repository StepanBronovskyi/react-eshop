import React from "react";
import ResultProductList from "../../components/Search/ResultProductList";
import { connect } from "react-redux";

const mapStateToProps = ({ filter }) => ({
    searchQuery: filter.searchQuery,
});

const ContainerProductList = ({ parentRef, resultVisible }) => {
    return (
        <ResultProductList parentRef={ parentRef } resultVisible={ resultVisible } />
    );
};


export default connect(mapStateToProps, null)(ResultProductList);
