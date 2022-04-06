initialState = {
    services: [],
   
   
};

const serviceReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            return { ...state, services: state.services.concat(action.payload.serviceName) };

        case 'REMOVE':
            var remove = action.payload.serviceName; 
            var index = state.services.indexOf(remove)
            if(index > -1){
                state.services.splice(index,1)
            }
            return {
                ...state, services : state.services

            }
           

        default:
            return state;
    }

}

export default serviceReducer;

