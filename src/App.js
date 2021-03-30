import React from 'react';
import './App.css';
import { TodoContainer } from './features/todo/TodoContainer';
import { Weather } from './features/weather/WeatherComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather />
        <TodoContainer />
      </header>
    </div>
  );
}

export default App;
