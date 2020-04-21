import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import * as serviceWorker from './serviceWorker'
import store from "./redux/store"

import App from './components/app'
import ErrorBoundary from "./components/error-boundary"
import { DevicesServiceProvider } from "./components/devices-service-context"
import deviceMonitorService from "./apiService"

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <DevicesServiceProvider value={deviceMonitorService}>
                <Router>
                    <App />
                </Router>
            </DevicesServiceProvider>
        </ErrorBoundary>
    </Provider>,
    document.getElementById('root')
)

serviceWorker.unregister()
