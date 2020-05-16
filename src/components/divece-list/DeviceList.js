import React, { Component } from "react"
import {connect} from "react-redux";

import './DeviceList.scss'
import Table from "../table";

import { withDevicesService } from '../hoc'

class DeviceList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deviceTable: {
                columns: [],
                data: []
            }
        };
    }

    componentDidMount() {
        const { devicesService: {devicesService} } = this.props

        devicesService.getDevices()
            .then(data => {
                this.setState({
                    deviceTable: {
                        columns: [
                            {dataKey: 'id', header: 'id', width: 5},
                            {dataKey: 'name', header: 'Название устройства'},
                            {dataKey: 'osName', header: 'Операционная система', width: 20},
                            {dataKey: 'location', header: 'Текущее расположение'},
                            {dataKey: 'defaultLocation', header: 'Место хранения'}
                        ],
                        data: devicesService.normaliseDevices(data).items
                    }
                })
            })
    }

    render() {
        // const { devices } = this.props

        return (
            <div>
                <Table data={this.state.deviceTable} />
            </div>
        )
    }
}

const mapStateToProps = ({devices: {devices}}) => {
    return { devices }
}

export default withDevicesService()(connect(mapStateToProps)(DeviceList))
