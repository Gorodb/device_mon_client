import React from "react"

import classes from './Table.module.scss'

// const tableJson = {
//     columns: [
//         {dataKey: 'id', header: 'id', width: 5},
//         {dataKey: 'name', header: 'Название устройства'},
//         {dataKey: 'osName', header: 'Операционная система'},
//         {dataKey: 'location', header: 'Текущее расположение'},
//         {dataKey: 'defaultLocation', header: 'Место хранения'}
//     ],
//     data: devices
// }

const Table = ({ data }) => {
    const gettingWidth = data.columns.reduce((acc, { width }) => width ? acc + width : acc, 0)
    const defaultWidth = (100 - gettingWidth) / data.columns.reduce((acc, { width }) => width ? acc + 1 : acc, 0)

    const rowItem = (value, width, key) => <span className={classes.item} key={key} style={{width: `${width}%`}}>{value}</span>

    const header =
        <div className={`${classes['row-item']} ${classes.header}`} key={0}>
            { data.columns.map(({ header, width}, key) => (
                width
                    ? rowItem(header, width, key)
                    : rowItem(header, defaultWidth, key)
            )) }
        </div>

    const rows = data.data.map((item, key) => (
        <div className={key % 2 === 0
            ? `${classes['row-item']} ${classes['even-row']}`
            : `${classes['row-item']} ${classes['odd-row']}`} key={item.id}>
            { data.columns.map(({dataKey, width}, key) => (
                width
                    ? rowItem(item[dataKey], width, key)
                    : rowItem(item[dataKey], defaultWidth, key)
            )) }
        </div>
    ))

    return (
        <div className={classes.table}>
            {header}
            {rows}
        </div>
    )
}

export default Table
