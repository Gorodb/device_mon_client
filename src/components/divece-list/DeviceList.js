import React from "react"
import { Link } from "react-router-dom";

import './DeviceList.module.scss'
import classes from './DeviceList.module.scss'

const DeviceList = ({ devices }) => {
    const renderRaw = ({id, name, osName, location, defaultLocation}, index) => {
        return (
            <tr key={id} className={index % 2 === 0 ? `${classes['even-row']}` : `${classes['odd-row']}`}>
                <td>
                    <Link to={`/devices/${id}`}><span>{id}</span></Link>
                </td>
                <td>
                    <Link to={`/devices/${id}`}><span>{name}</span></Link>
                </td>
                <td>
                    <Link to={`/devices/${id}`}><span>{osName}</span></Link>
                </td>
                <td>
                    <Link to={`/devices/${id}`}><span>{location}</span></Link>
                </td>
                <td>
                    <Link to={`/devices/${id}`}><span>{defaultLocation}</span></Link>
                </td>
            </tr>
        )
    }

    return (
        <div className={classes.devices}>
            <table>
                <thead>
                <tr>
                    <th><span>id</span></th>
                    <th><span>Название устройства</span></th>
                    <th><span>Операционная система</span></th>
                    <th><span>Текущее расположение</span></th>
                    <th><span>Место хранения</span></th>
                </tr>
                </thead>
                    <tbody>
                    {
                        devices.map((device, index) => renderRaw(device, index))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default DeviceList
