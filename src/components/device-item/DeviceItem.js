import React, {Component} from "react"
import ErrorIndicator from "../error-indicator"
import Spinner from "../spinner/Spinner"
import {fetchDevice} from "../../redux/devices/devices.actions"
import {compose} from "../../utils"
import {withDevicesService} from "../hoc"
import {connect} from "react-redux"

import './DeviceItem.scss'
import classes from "../divece-list/DeviceList.module.scss";

const deviceItem = {
    "id": 2,
    "charge": null,
    "defaultLocation": "Зал в Питере",
    "location": "Зал в Питере",
    "department": {
        "name": "Ульяновск",
        "description": "Ульяновский офис"
    },
    "departmentId": 1,
    "deviceType": {
        "deviceType": "tablet",
        "title": "планшет"
    },
    "name": "Samsung A10",
    "osName": "Android 8.1",
    "userUpdate": null,
    "owner": {
        "id": 3,
        "name": "Рамис",
        "email": "vakazov@restream.rt.ru",
        "phone": "+79084856987",
        "role": "admin",
        "image": "no-image",
        "isEmailConfirmed": true,
        "description": "Я нахожусь в Питере, так что, если телефон лежит у меня, то попробуйте заберите",
        "department_id": 1
    }
}

const DeviceItem = ({ device }) => {
    console.log(device)
    const { name, osName, defaultLocation, location, department, deviceType, owner } = device

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
                <span className="item">{osName}</span>
                <span className="item">{defaultLocation}</span>
                <span className="item">{location}</span>
            </div>
        </div>
    )
}

class DeviceItemContainer extends Component {
    componentDidMount() {
        this.props.fetchDevice(this.props.id)()
    }

    render() {
        const { device, loading, error } = this.props

        if (error) return <div className={classes.devices}><ErrorIndicator error={error} /></div>
        if (loading) return <div className={classes.devices}><Spinner /></div>

        return <DeviceItem device={device} />
    }
}

const mapStateToProps = ({devices: {device, loading, error}}) => {
    return { device, loading, error }
}

const mapDispatchToProps = (dispatch, { devicesService: { devicesService }}) => {
    return {
        fetchDevice: (id) => fetchDevice(id, devicesService, dispatch)
    }
}

export default compose(
    withDevicesService(),
    connect(mapStateToProps, mapDispatchToProps)
)(DeviceItemContainer)