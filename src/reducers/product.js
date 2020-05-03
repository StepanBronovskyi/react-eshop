const initialState = {
    items: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return {
                ...state,
                items: action.payload
            };
        default:
            return state;
    }
};