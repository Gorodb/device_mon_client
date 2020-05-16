import React from 'react'
import { Route, Switch } from "react-router-dom"

import { HomePage, DevicesPage } from "../pages"
// import Table from "../table"

import { withDevicesService } from '../hoc'

const App = ({ devicesService }) => {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/devices" component={DevicesPage} />
            </Switch>
            {/*<Table />*/}
        </div>
    )
}

export default withDevicesService()(App)
