import { DevicesActionTypes } from "./devices.types"

const {
    FETCH_DEVICES_REQUEST,
    FETCH_DEVICES_SUCCESS,
    FETCH_DEVICES_FAILURE,
    FETCH_DEVICE_REQUEST,
    FETCH_DEVICE_SUCCESS,
    FETCH_DEVICE_FAILURE
} = DevicesActionTypes

export const fetchDevicesRequest = () => ({
    type: FETCH_DEVICES_REQUEST
})

export const fetchDeviceRequest = () => ({
    type: FETCH_DEVICE_REQUEST
})

export const fetchDevicesSuccess = (devices) => ({
    type: FETCH_DEVICES_SUCCESS,
    payload: devices
})

export const fetchDeviceSuccess = (devices) => ({
    type: FETCH_DEVICE_SUCCESS,
    payload: devices
})

export const fetchDevicesError = (errorMessage) => ({
    type: FETCH_DEVICES_FAILURE,
    payload: errorMessage
})

export const fetchDeviceError = (errorMessage) => ({
    type: FETCH_DEVICE_FAILURE,
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
        .catch(err => dispatch(fetchDevicesError('Ошибка в запросе списка устройств')))
}

export const fetchDevice = (deviceId, devicesService, dispatch) => () => {
    dispatch(fetchDeviceRequest())
    devicesService.getDevice(deviceId)
        .then(data => {
            !data.error
                ? dispatch(fetchDeviceSuccess(devicesService.normaliseDevice(data)))
                : dispatch(fetchDeviceError(data.error))
        })
        .catch(err => dispatch(fetchDeviceError('Ошибка в запросе устройства')))
}
