initialState = {
    loggedIn: false,
    services: [],
};

const serviceReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            return { ...state, services: state.services.concat(action.payload.serviceName) };

        case 'REMOVE':
            var remove = action.payload.serviceName;
            var index = state.services.indexOf(remove)
            if (index > -1) {
                state.services.splice(index, 1)
            }
            return {
                ...state, services: state.services

            }
        case 'SERVICES_NULL':
            return {
                ...state, services: []

            }
        case 'LOGIN':
            return {
                ...state,
                loggedIn: true
            }

        case 'LOGOUT':
            return {
                ...state,
                services: [],
                loggedIn: false
            }


        default:
            return state;
    }

}

export default serviceReducer;

