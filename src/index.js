import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter } from 'react-router-dom';

import './index.scss';
import App from './Components/App';
import registerServiceWorker from './registerServiceWorker';

const render = Component => {
    ReactDOM.render(
      <AppContainer>
        <BrowserRouter>
          <Component />
        </BrowserRouter>
      </AppContainer>,
      document.getElementById('root'),
    )
  }

render(App);

if (module.hot) {
    module.hot.accept('./Components/App', () => { render(App) })
  }

registerServiceWorker();
