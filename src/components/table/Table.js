import React from "react"

import './Table.scss'

const data = {
    columns: [
        {dataKey: 'deviceName', header: 'Название устройства'},
        {dataKey: 'os', header: 'Операционная система'},
        {dataKey: 'location', header: 'Место хранения'},
        {dataKey: 'currentLocation', header: 'Место хранения'}
    ],
    data: [
        {
            id: 1,
            deviceName: 'Samsung A10',
            os: 'Android 8.1',
            location: 'Зал в Питере',
            currentLocation: 'Зал в Питере'
        }, {
            id: 2,
            deviceName: 'iphone',
            os: 'ios 13',
            location: 'Зал в Питере',
            currentLocation: 'Стол в зале в Питере'
        }, {
            location: 'Зал в Питере',
            os: 'Android 7',
            deviceName: 'Xiaomi mi 6',
            id: 3,
            currentLocation: 'Длинный большой текст с описанием того, где сейчас располагается устройство'
        }, {
            id: 4,
            deviceName: 'Xiaomi mi 9se',
            os: 'Android 9',
            location: 'Зал в Питере',
            currentLocation: 'У Ани в руках'
        }
    ]
}

const Table = ({ rows }) => {
    const header =
        <div className="row-item header" key={0}>
            { data.columns.map(({ header }, key) => (
                <span className="item" key={key}>{header}</span>
            )) }
        </div>

    rows = data.data.map((item, key) => (
        <div className={key % 2 === 0 ? 'row-item even-row' : 'row-item odd-row'} key={item.id}>
            { data.columns.map(({dataKey}, key) => (
                <span className="item" key={key}>{item[dataKey]}</span>
            )) }
        </div>
    ))

    return (
        <div className="table">
            {header}
            {rows}
        </div>
    )
}

export default Table
