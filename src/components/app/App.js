import React from 'react'
import DeviceList from "../divece-list/DeviceList"

import { withDevicesService } from '../hoc'

const App = ({ devicesService }) => {
    console.log(devicesService.devicesService.getDevices())
    return (
        <div>
            <DeviceList />
        </div>
    )
}

export default withDevicesService()(App)
