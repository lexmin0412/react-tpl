import React from "react";
import {
  BrowserRouter,
  // Switch,
  Route,
  // Link
} from 'react-router-dom';
import HomeIndex from './pages/home/index'
import UserIndex from './pages/user/index'
import AboutIndex from './pages/about/index'

export default function App() {
  return (
    <BrowserRouter
      getUserConfirmation={(message, callback) => {
        console.log('getUserConfirmation', message, callback)
        // this is the default behavior
        const allowTransition = window.confirm(message);
        callback(allowTransition);
      }}
    >
      {/* <Switch> */}
      <Route path="/about" component={AboutIndex}></Route>
      <Route path="/user" component={UserIndex}></Route>
      <Route path="/home" component={HomeIndex} exact></Route>
    </BrowserRouter>
  );
}
