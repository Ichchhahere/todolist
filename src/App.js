import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [title,setTitle]=useState('');
  const todoList = window.localStorage.getItem('todoList');
  const handleChange = (e) => {
    e.preventDefault();
      if (todoList) {
        const todoListArr = JSON.parse(todoList);
        todoListArr.push({
          title
        });
        window.localStorage.setItem('todoList', JSON.stringify(todoListArr));
      }
      else{
    window.localStorage.setItem(
      'todoList',
      JSON.stringify([
        {
          title
        },
      ])
    );
      }
  }
  return (
    <div className="App">
      <h1>To do list</h1>
      <input type="text" onChange={(e)=> setTitle(e.target.value)} name="text" value={title}/>
      <button onClick={(e)=>{
        handleChange(e)
      }}>Add</button>
      {todoList}
    </div>
  );
}

export default App;
