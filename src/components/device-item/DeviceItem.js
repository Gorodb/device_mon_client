import React from "react"

import './DeviceItem.scss'

const DeviceItem = ({ device }) => {
    const { name, os_name, default_location, location } = device

    return (
        <div>
            <div className="device-item header">
                <span className="item">Название устройства</span>
                <span className="item">Операционная система</span>
                <span className="item">Место хранения по-умолчанию</span>
                <span className="item">Сейчас находится</span>
            </div>
            <div className="device-item">
                <span className="item">{name}</span>
                <span className="item">{os_name}</span>
                <span className="item">{default_location}</span>
                <span className="item">{location}</span>
            </div>
        </div>
    )
}

export default DeviceItem