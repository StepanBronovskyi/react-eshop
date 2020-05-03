const initialState = {
    items: [],
    currentAdminCategory: null,
    currentCatalogCategory: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CATEGORIES':
            return {
                ...state,
                items: action.payload
            };
        case 'SET_CURRENT_ADMIN_CATEGORY':
            return {
                ...state,
                currentAdminCategory: action.payload
            };
        case 'SET_CURRENT_CATALOG_CATEGORY':
            return {
                ...state,
                currentCatalogCategory: action.payload
            };
        default:
            return state;
    }
};
