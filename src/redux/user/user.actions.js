import { UserActionTypes } from "./user.types"

const {
    AUTH_USER_REQUEST,
    AUTH_USER_SUCCESS,
    AUTH_USER_FAILURE
} = UserActionTypes

export const fetchDevicesRequest = () => ({
    type: AUTH_USER_REQUEST
})

export const fetchDevicesSuccess = (devices) => ({
    type: AUTH_USER_SUCCESS,
    payload: devices
})

export const fetchDevicesError = (errorMessage) => ({
    type: AUTH_USER_FAILURE,
    payload: errorMessage
})

export const fetchDevices = (devicesService, dispatch) => () => {
    dispatch(fetchDevicesRequest())
    devicesService.getDevices()
        .then(data => {
            !data.error
                ? dispatch(fetchDevicesSuccess(devicesService.normaliseDevices(data).items))
                : dispatch(fetchDevicesError(data.error))
        })
        .catch(err => dispatch(fetchDevicesError(err)))
}
