export const setSearchQuery = query => {
    return {
        type: 'SET_SEARCH_QUERY',
        payload: query
    }
};

export const setPriceRange = range => {
    return {
        type: 'SET_PRICE_RANGE',
        payload: range
    }
};

export const setSortBy = sortBy => {
    return {
        type: 'SET_SORT_BY',
        payload: sortBy
    }
};
