import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader'
import { BrowserRouter } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';

//------------------STORE---------------------
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './Reducers/reducers';

//------------------COMPONENTS---------------------
import App from './Components/App';


const store = createStore(reducer);

const render = Component => {
    ReactDOM.render(
      <AppContainer>
        <Provider store = {store}>
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
