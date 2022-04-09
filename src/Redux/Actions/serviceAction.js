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

const serviceNull = () => {
    return {
        type: 'SERVICES_NULL'
    }
}

const login = () => {
    return {
        type: 'LOGIN'
    }
}

const logout = () => {
    return {
        type: 'LOGOUT'
    }
}

export {addService, removeService, serviceNull, login, logout}