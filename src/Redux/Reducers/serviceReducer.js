initialState = {
    services: []
};

const serviceReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            return { ...state, services: state.services.concat(action.payload.serviceName) };

        case 'REMOVE':
            return {

            }

        default:
            return state;
    }

}

export default serviceReducer;

