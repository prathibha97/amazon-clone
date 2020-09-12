import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import Login from './components/Login';
import {auth} from './firebase/firebase';
import { useStateValue } from "./context/StateProvider";

function App() {
  const [{}, dispatch]= useStateValue();
  useEffect(() => {
    // will only run once when the app component loads
    auth.onAuthStateChanged(authUser =>{
      console.log('The user is >> ', authUser);
      if(authUser){
        // user just logged in / was logged in
        dispatch({
          type: 'SET_USER',
          user:authUser
        })
      }
      else{
        // user logged out
        dispatch({
          type: 'SET_USER',
          user:null
        })
      }
    })
  }, []);
  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route path='/login'>
            <Login/>
          </Route>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
