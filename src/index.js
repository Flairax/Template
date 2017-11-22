import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.scss';
import App from './Components/App';
import registerServiceWorker from './registerServiceWorker';

const render = Component => {
    ReactDOM.render(
      <AppContainer>
        <Provider>
          <BrowserRouter>
            <Component />
          </BrowserRouter>
        </Provider>       
      </AppContainer>,
      document.getElementById('root'),
    )
  }

render(App);

if (module.hot) {
    module.hot.accept('./Components/App', () => { render(App) })
  }

registerServiceWorker();
