import React from 'react'
import { Route, Switch } from "react-router-dom"

import { HomePage, DevicesPage, DevicePage } from "../pages"

import { withDevicesService } from '../hoc'

const App = () => {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/devices" exact component={DevicesPage} />
                <Route path="/devices/:id" render={({ match: {params : { id }}}) => {
                    return <DevicePage id={id}/>
                }} />
            </Switch>
        </div>
    )
}

export default withDevicesService()(App)
