import { DevicesActionTypes } from "./devices.types"

const {
    FETCH_DEVICES_REQUEST,
    FETCH_DEVICES_SUCCESS,
    FETCH_DEVICES_FAILURE
} = DevicesActionTypes

const initialState = {
    loading: true,
    devices: [{
        "id": 2,
        "name": "Samsung A10",
        "os_name": "Android 8.1",
        "default_location": "Зал в Питере",
        "location": "Зал в Питере",
        "charge": null,
        "department_id": 1,
        "department": {
            "name": "Ульяновск",
            "description": "Ульяновский офис"
        },
        "owner": {
            "id": 3,
            "name": "Рамис",
            "email": "vakazov@restream.rt.ru",
            "phone": "+79084856987",
            "role": "admin",
            "image": "no-image",
            "is_email_confirmed": true,
            "description": "Я нахожусь в Питере, так что, если телефон лежит у меня, то попробуйте заберите",
            "department_id": 1
        },
        "userUpdate": null,
        "deviceType": {
            "device_type": "tablet",
            "title": "планшет"
        }
    }],
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