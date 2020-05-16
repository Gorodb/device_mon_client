import ApiService from "./apiService"

class DeviceAdminService extends ApiService {
    static getDevice (id) {
        return this._getRequest(`/api/v1/admin/devices/${id}`)
    }

    static getDevices () {
        return this._getRequest(`/api/v1/admin/devices`)
    }

    static crateDevice (device) {
        return this._postRequest('/api/v1/admin/devices', device)
    }

    static updateDevice (id, device) {
        return this._putRequest(`/api/v1/admin/devices/${id}`, device)
    }

    static deleteDevice (id) {
        return this._deleteRequest(`/api/v1/admin/devices/${id}`)
    }

    static normaliseDevice (data) {
        const { success, error } = data
        return { success, error, data: data.data }
    }
}

export default DeviceAdminService