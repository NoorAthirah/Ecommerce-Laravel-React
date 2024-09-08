import React, { Component, Fragment } from 'react';
import { Button } from 'react-bootstrap';
import AppRoute from './route/AppRoute';  // No need to wrap AppRoute with BrowserRouter here

export class App extends Component {
  render() {
    return (
      <Fragment>
        <AppRoute />  {/* AppRoute already handles routing */}
      </Fragment>
    );
  }
}

export default App;

