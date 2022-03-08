const addService = (serviceName) => {
    return {
        type: 'ADD',
        payload: {
            serviceName : serviceName
        }
    }
}

const removeService = (serviceName) => {
    return {
        type: 'REMOVE',
        payload: {
            serviceName : serviceName
        }
    }
}

export {addService, removeService}