import ApiService from "./apiService"

class DeviceService extends ApiService {
    static async getDevice (id) {
        const { data } = await this._getRequest(`/api/v1/devices/${id}`)

        return data
    }

    static async getDevices () {
        const { data } = await this._getRequest(`/api/v1/devices/`)

        return data
    }

    static updateDevice (id, device) {
        const { data } = this._putRequest(`/api/v1/devices/${id}`, device)

        return data
    }

    static normaliseDevice (device) {
        return {
            id: device.id,
            charge: device.charge,
            defaultLocation: device.default_location,
            location: device.location,
            department: device.department,
            departmentId: device.department_id,
            deviceType: {
                deviceType: device.deviceType.device_type,
                title: device.deviceType.title
            },
            name: device.name,
            osName: device.os_name,
            userUpdate: device.userUpdate,
            owner: {
                id: device.owner.id,
                name: device.owner.name,
                email: device.owner.email,
                phone: device.owner.phone,
                role: device.owner.role,
                image: device.owner.image,
                isEmailConfirmed: device.owner.is_email_confirmed,
                description: device.owner.description,
                department_id: device.owner.department_id}
        }
    }

    static normaliseDevices ({ error = null, pagination, items }) {
        if (error) {
            return error
        }

        const devices = items.reduce((acc, device) => [...acc, this.normaliseDevice(device)], [])

        return { pagination, items: devices }
    }
}

export default DeviceService