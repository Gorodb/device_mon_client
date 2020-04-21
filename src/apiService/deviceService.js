import ApiService from "./apiService"

class DeviceService extends ApiService {
    static getDevice (id) {
        return this._getRequest(`/api/v1/devices/${id}`)
    }

    static getDevices () {
        return this._getRequest(`/api/v1/devices`)
    }

    static updateDevice (id, device) {
        return this._putRequest(`/api/v1/devices/${id}`, device)
    }

    static normaliseDevice (data) {
        const { success, error } = data
        return { success, error, data: data.data }
    }
}

export default DeviceService