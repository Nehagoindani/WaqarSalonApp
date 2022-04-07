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

export {addService, removeService, login, logout}