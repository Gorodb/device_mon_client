import React, {Component} from "react"
import classes from "./DeviceList.module.scss"
import ErrorIndicator from "../error-indicator"
import Spinner from "../spinner/Spinner"
import {fetchDevices} from "../../redux/devices/devices.actions"
import {compose} from "../../utils"
import {withDevicesService} from "../hoc"
import {connect} from "react-redux"

import DeviceList from "./DeviceList"

class DeviceListContainer extends Component {

    componentDidMount() {
        this.props.fetchDevices()
    }

    render() {
        const { devices, loading, error } = this.props

        if (error) return <div className={classes.devices}><ErrorIndicator error={error} /></div>
        if (loading) return <div className={classes.devices}><Spinner /></div>

        return <DeviceList devices={devices} />
    }
}

const mapStateToProps = ({devices: {devices, loading, error}}) => {
    return { devices, loading, error }
}

const mapDispatchToProps = (dispatch, { devicesService: { devicesService }}) => {
    return {
        fetchDevices: fetchDevices(devicesService, dispatch)
    }
}

export default compose(
    withDevicesService(),
    connect(mapStateToProps, mapDispatchToProps)
)(DeviceListContainer)
