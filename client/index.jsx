import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    </AppContainer>,
    document.getElementById('main'));
};

render(App);

if (module.hot) {
  // Renders App every time a change in code happens.
  module.hot.accept('./components/App.jsx', () => {
    const newApp = require('./components/App').default;
    render(newApp);
  });
}
