import { UserActionTypes } from "./user.types"

const {
    AUTH_USER_REQUEST,
    AUTH_USER_SUCCESS,
    AUTH_USER_FAILURE
} = UserActionTypes

const initialState = {
    loading: true,
    error: null,
    token: '',
    user: {},
    department: ''
}

const user = (state, action) => {
    switch (action.type) {
        case AUTH_USER_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
                devices: [],
            }
        case AUTH_USER_SUCCESS:
            return {
                ...state,
                devices: action.payload,
                loading: false,
                error: null
            }
        case AUTH_USER_FAILURE:
            return {
                ...state,
                devices: [],
                loading: false,
                error: action.payload
            }
        default:
            return initialState
    }
}

export default updateDevices