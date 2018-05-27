import "babel-polyfill";
import './stylesheets/main.scss';
import './stylesheets/antd.less';
import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from 'react-hot-loader';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

import App from './App';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
        <LocaleProvider locale={enUS}>
            <Component />
        </LocaleProvider>
    </AppContainer>,
    document.getElementById('app'),
  )
}

render(App)

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => {
  	const NextApp = require('./App').default;
    render(NextApp)
  })
}
