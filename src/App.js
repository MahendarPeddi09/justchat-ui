import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import LoginContainer,{logged} from './components/login/loginContainer';
import Maincontainer from './components/main/mainContainer';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import chatwindowReducer from './reducers/chatwindowReducer';

const store = createStore(chatwindowReducer,composeWithDevTools(applyMiddleware(thunk)))

 var ll = logged ? <Route exact  path="/login" component = {LoginContainer} /> : <Route exact path="/" component = {Maincontainer} />;
function App() {
  console.log(logged)
  return (
  <Router>
    <Provider store={store}>
    <div className="App">
    <Route exact  path="/login" component = {!logged ? LoginContainer : Maincontainer} />
    <Route exact path="/" component = {Maincontainer} />
    </div>
    </Provider>
  </Router> 
  );
}

export default App;
