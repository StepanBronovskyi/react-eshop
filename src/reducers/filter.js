const initialState = {
    searchQuery: null,
    priceRange: null,
    sortBy: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SEARCH_QUERY':
            return {
                ...state,
                searchQuery: action.payload,
            };
        case 'SET_PRICE_RANGE':
            return {
                ...state,
                priceRange: action.payload,
            };
        case 'SET_SORT_BY':
            return {
                ...state,
                sortBy: action.payload
            };
        default:
            return state;
    }
};
