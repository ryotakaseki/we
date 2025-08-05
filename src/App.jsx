import React from 'react';
import './App.css';
import MyButton from './components/MyButton.jsx';
import GreetingMessage from './components/GreetingMessage.jsx';
import FruitList from './components/FruitList.jsx';
import Counter from './components/Counter.jsx';
import Title from './components/title.jsx';


function App() {



  return (
    <div className="app-container">
      <Title />
      <GreetingMessage />
      <FruitList />
      <Counter />
      <MyButton text="ボタン1" />
      <MyButton text="ボタン2" />
    </div>
  );
}

export default App