import React from "react"

import './Table.scss'

// const data = {
//     columns: [
//         {dataKey: 'id', header: 'id', width: 5},
//         {dataKey: 'deviceName', header: 'Название устройства'},
//         {dataKey: 'os', header: 'Операционная система', width: 20},
//         {dataKey: 'location', header: 'Место хранения'},
//         {dataKey: 'currentLocation', header: 'Место хранения'},
//         {dataKey: 'currentLocation2', header: 'Место хранения 2'}
//     ],
//     data: [
//         {
//             id: 1,
//             deviceName: 'Samsung A10',
//             os: 'Android 8.1',
//             location: 'Зал в Питере',
//             currentLocation: 'Зал в Питере',
//             currentLocation2: 'Зал в Питере'
//         }, {
//             id: 2,
//             deviceName: 'iphone',
//             os: 'ios 13',
//             location: 'Зал в Питере',
//             currentLocation: 'Стол в зале в Питере',
//             currentLocation2: 'Зал в Питере'
//         }, {
//             location: 'Зал в Питере',
//             os: 'Android 7',
//             deviceName: 'Xiaomi mi 6',
//             id: 3,
//             currentLocation: 'Длинный большой текст с описанием того, где сейчас располагается устройство',
//             currentLocation2: 'Зал в Питере'
//         }, {
//             id: 4,
//             deviceName: 'Xiaomi mi 9se',
//             os: 'Android 9',
//             location: 'Зал в Питере',
//             currentLocation: 'У Ани в руках',
//             currentLocation2: 'Зал в Питере'
//         }
//     ]
// }

const Table = ({ data }) => {
    const gettingWidth = data.columns.reduce((acc, { width }) => width ? acc + width : acc, 0)
    const defaultWidth = (100 - gettingWidth) / data.columns.reduce((acc, { width }) => width ? acc + 1 : acc, 0)

    const rowItem = (value, width, key) => <span className="item" key={key} style={{width: `${width}%`}}>{value}</span>

    const header =
        <div className="row-item header" key={0}>
            { data.columns.map(({ header, width}, key) => (
                width
                    ? rowItem(header, width, key)
                    : rowItem(header, defaultWidth, key)
            )) }
        </div>

    const rows = data.data.map((item, key) => (
        <div className={key % 2 === 0 ? 'row-item even-row' : 'row-item odd-row'} key={item.id}>
            { data.columns.map(({dataKey, width}, key) => (
                width
                    ? rowItem(item[dataKey], width, key)
                    : rowItem(item[dataKey], defaultWidth, key)
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
