import { DevicesActionTypes } from "./devices.types"

const {
    FETCH_DEVICES_REQUEST,
    FETCH_DEVICES_SUCCESS,
    FETCH_DEVICES_FAILURE
} = DevicesActionTypes

const initialState = {
    loading: true,
    devices: [],
    error: null,
    device: null,
    currentDevice: null
}

const updateDevices = (state, action) => {
    switch (action.type) {
        case FETCH_DEVICES_REQUEST:
            return {
                loading: true,
                error: null
            }
        case FETCH_DEVICES_SUCCESS:
            return {
                devices: action.payload,
                loading: false,
                error: null
            }
        case FETCH_DEVICES_FAILURE:
            return {
                devices: [],
                loading: false,
                error: action.payload
            }
        default:
            return initialState
    }
}

export default updateDevices