import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import Main from './pages/Main';
import './styles.css';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <title>DREAMORPHY</title>
        <Switch>
          <Route exact={false} component={Main} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default hot(App);
