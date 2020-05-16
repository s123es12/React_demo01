import React from 'react';
import ReactDOM  from 'react-dom'
import {App} from './App'
import {Provider} from 'react-redux'
import store from './redux/store/store'
import {CookiesProvider} from 'react-cookie';

ReactDOM.render(
    <Provider store={store}>
        <CookiesProvider>
            <App/>
        </CookiesProvider>
    </Provider>
,document.getElementById('root'));
