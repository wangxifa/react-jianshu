import React, { Component } from 'react';
import Header from './common/header/index';
import Home from './pages/home';
import Detail from './pages/detail';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>     
          <BrowserRouter>
            <div>
              <Header />
              <Route path='/' exact component={Home}></Route>
              <Route path='/detail' exact exact component={Detail}></Route>              
            </div>
          </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
