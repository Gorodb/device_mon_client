import React from 'react'
import { Route, Switch } from "react-router-dom"

import { HomePage, DevicesPage } from "../pages"
import Table from "../table"

import { withDevicesService } from '../hoc'

const App = ({ devicesService }) => {
    console.log(devicesService.devicesService.getDevices())
    return (
        <div>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/devices" component={DevicesPage} />
            </Switch>
            <div style={{margin: '0 auth', width: '1366px'}}>
                <Table />
            </div>
        </div>
    )
}

export default withDevicesService()(App)
