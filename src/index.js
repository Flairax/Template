import React from 'react';
import ReactDOM from 'react-dom';


import { AppContainer } from 'react-hot-loader'
import { BrowserRouter } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';

import App from './Components/App';
import store from './store';

const root = document.getElementById('root');

const render = Component => {
    ReactDOM.render(
      <AppContainer>
        <Provider store = {store}>
          <BrowserRouter>
            <Component />
          </BrowserRouter>
        </Provider>       
      </AppContainer>,
      root
    )
  }

render(App);

if (module.hot) {
    module.hot.accept('./Components/App', () => { render(App) })
}

registerServiceWorker();