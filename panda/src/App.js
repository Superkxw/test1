import React from 'react';
import logo from './logo.svg';
import './App.css';
import './css/reset.css';
import Header from './components/Header';

class App extends React.Component{
  render(){
     return (
      <div className="App red">
              <Header / >
      </div>
    )
  }
}

export default App;

