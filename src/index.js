import React from 'react';
import ReactDOM  from 'react-dom'
import {App} from './App'
import {Provider} from 'react-redux'
import store from './redux/store/store'
import {CookiesProvider} from 'react-cookie';
import {BrowserRouter} from 'react-router-dom'
ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <CookiesProvider>
                <App/>
            </CookiesProvider>
        </Provider>
    </BrowserRouter>
,document.getElementById('root'));
