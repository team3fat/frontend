import {
    LOGIN_REQUEST, LOGIN_SUCCESS,
    LOGIN_FAILURE, LOGOUT_SUCCESS,
    VERIFY_TOKEN_REQUEST, VERIFY_TOKEN_SUCCESS,
    VERIFY_TOKEN_FAILURE, FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE
} from '../actions';

function authReducer(state={
    isFetching: false,
    ifAuthenticated: localStorage.getItem('token')? true : false
}, action) {
    switch(action.type){
        case LOGIN_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                isAuthenticated: false,
                user: action.creds
            })
        case LOGIN_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: true,
                errorMessage: ''
            })
        case LOGIN_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: false,
                errorMessage: action.message
            })
        case LOGOUT_SUCCESS:
            return Object.assign({}, state, {
                isFetching: true,
                isAuthenticated: false
            })
            case VERIFY_TOKEN_REQUEST:
                    return Object.assign({}, state, {
                        isFetching: true,
                        isAuthenticated: true
                    })
                case VERIFY_TOKEN_SUCCESS:
                    return Object.assign({}, state, {
                        isFetching: false,
                        isAuthenticated: true
                    })
                case VERIFY_TOKEN_FAILURE:
                    return Object.assign({}, state, {
                        isFetching: false,
                        isAuthenticated: false
                    })
                    case FETCH_USERS_REQUEST:
                    return Object.assign({}, state, {
                        isFetching: true,
                        users: null
                    })
                case FETCH_USERS_SUCCESS:
                    return Object.assign({}, state, {
                        isFetching: false,
                        users: action.users
                    })
                case FETCH_USERS_FAILURE:
                    return Object.assign({}, state, {
                        isFetching: false,
                        users: null,
                        message: action.message
                    })
                default:
                    return state
    }
}

export default authReducer;