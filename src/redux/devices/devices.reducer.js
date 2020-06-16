import { DevicesActionTypes } from "./devices.types"

const {
    FETCH_DEVICES_REQUEST,
    FETCH_DEVICES_SUCCESS,
    FETCH_DEVICES_FAILURE,
    FETCH_DEVICE_REQUEST,
    FETCH_DEVICE_SUCCESS,
    FETCH_DEVICE_FAILURE
} = DevicesActionTypes

const initialState = {
    loading: true,
    devices: [],
    error: null,
    device: {},
    currentDevice: {}
}

const updateDevices = (state, action) => {
    switch (action.type) {
        case FETCH_DEVICES_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
                devices: [],
            }
        case FETCH_DEVICES_SUCCESS:
            return {
                ...state,
                devices: action.payload,
                loading: false,
                error: null
            }
        case FETCH_DEVICES_FAILURE:
            return {
                ...state,
                devices: [],
                loading: false,
                error: action.payload
            }
        case FETCH_DEVICE_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
                device: {},
            }
        case FETCH_DEVICE_SUCCESS:
            return {
                ...state,
                device: action.payload,
                loading: false,
                error: null
            }
        case FETCH_DEVICE_FAILURE:
            return {
                ...state,
                device: {},
                loading: false,
                error: action.payload
            }
        default:
            return initialState
    }
}

export default updateDevices