import { DevicesActionTypes } from "./devices.types"
import DeviceService from "../../apiService/deviceService"

const {
    FETCH_DEVICES_REQUEST,
    FETCH_DEVICES_SUCCESS,
    FETCH_DEVICES_FAILURE
} = DevicesActionTypes

export const fetchDevicesRequest = () => ({
    type: FETCH_DEVICES_REQUEST,
    payload: DeviceService.getDevices()
})

export const fetchDevicesSuccess = (devices) => ({
    type: FETCH_DEVICES_SUCCESS,
    payload: devices
})

export const fetchDevicesError = (errorMessage) => ({
    type: FETCH_DEVICES_FAILURE,
    payload: errorMessage
})
