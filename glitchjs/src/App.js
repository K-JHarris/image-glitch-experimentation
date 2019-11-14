import React from 'react';
import './App.css';
import MainContainer from './components/mainContainer/mainContainer';

function App() {
  return (
    <div className="App" id="app-container">
      <header className="App-header">
        <img id="image" src="https://i.imgur.com/VS0D97S.jpg"></img>
        
        <p>Hello Captain! No errors here. Were you surprised?</p>
        <MainContainer/>
      </header>
    </div>
  );
}

export default App;
