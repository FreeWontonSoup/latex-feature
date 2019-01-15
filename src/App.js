import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InputField from "./components/InputField";
import Header from "./components/layouts/Header";
import { Input } from '@material-ui/core';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <InputField />
      </div>
    );
  }
}

export default App;
