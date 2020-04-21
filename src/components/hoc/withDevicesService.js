import React from "react"

import { DevicesServiceConsumer } from "../devices-service-context"

const withDevicesService = () => (Wrapped) => {
    return (props) => {
        return (
            <DevicesServiceConsumer>
                {
                    (devicesService) => {
                        return (<Wrapped {...props} devicesService={devicesService} />)
                    }
                }
            </DevicesServiceConsumer>
        )
    }
}

export default withDevicesService
