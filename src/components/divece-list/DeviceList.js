import React, { Component } from "react"

import './DeviceList.scss'
import DeviceItem from "../device-item"

export default class DeviceList extends Component {
    render() {
        const { devices } = this.props
        console.log(this.props)
        return (
            <div>
                {
                    devices.map(device => <DeviceItem key={device.id} device={device} />)
                }
            </div>
        )
    }
}
