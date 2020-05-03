export const setCategories = categories => {
    return {
        type: 'SET_CATEGORIES',
        payload: categories
    }
};

export const setCurrentCatalogCategory = category => {
    return {
        type: 'SET_CURRENT_CATALOG_CATEGORY',
        payload: category
    }
};

export const setCurrentAdminCategory = category => {
    return {
        type: 'SET_CURRENT_ADMIN_CATEGORY',
        payload: category
    }
};
