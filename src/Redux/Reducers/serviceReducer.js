initialState = {
    services: null
};

const serviceReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            return { ...state, services: action.payload.serviceName };

        case 'REMOVE':
            return {

            }

        default:
            return state;
    }

}

export default serviceReducer;

