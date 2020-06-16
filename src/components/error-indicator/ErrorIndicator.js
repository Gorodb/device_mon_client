import React from "react"

const ErrorIndicator = ({ error = 'Error!!!' }) => {
    return (
        <div>{error}</div>
    )
}

export default ErrorIndicator
