import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import { Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();  

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => (
  <div style={styles}>
    <Hello name="Hello" />
  </div>
);

render(< Router history={history} >
  <App />
</Router >, document.getElementById('root'));
