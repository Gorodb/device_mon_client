import React from "react"

import DeviceList from "../divece-list"

const devices = [{
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
}]

const DevicesPage = () => {
    return (
        <div>
            <DeviceList devices={devices} />
        </div>
    )
}

export default DevicesPage
