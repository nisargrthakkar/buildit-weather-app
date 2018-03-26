import React, { Component } from 'react'; //eslint-disable-line
import { Route } from 'react-router-dom';
import HomeViewContainer from './home/HomeViewContainer';

class App extends Component {

  render() {
    return (
      <div className="App">
        <main>
          <Route exact path="/" component={HomeViewContainer} />
        </main>
      </div>
    );
  }
}

export default App;

