import React, { useState, useEffect } from 'react';
import Todo from './Todo';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import db from './firebase';
import firebase from 'firebase';


function App() {

  const [todos,setTodos] = useState([]);
  const [input,setInput] = useState('');
// when app loads, we need to listen the database and fetch new todos as they get added/removed

  useEffect(() => {
    //this code here.....fires when app.js loads
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot =>{
      //console.log(snapshot.docs.map(doc=>doc.data()));
      setTodos(snapshot.docs.map(doc=>({id: doc.id, todo:doc.data().todo})))
    })
  },[]);
   
  const addTodo = (event)=>{
    //this will fire off when we click the button
    //console.log('workinggg');
    event.preventDefault();    //stops the refresh
    
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
   
    setInput('');     //clearing the input after submitting
  }

  return (
    <div className="App">
      <h1>Hello Developers 🚀!</h1>
      <form>
           
           <FormControl>
               <InputLabel>✔️ Write a Todo</InputLabel>
               <Input value={input} onChange={event=>setInput(event.target.value)}  />
            </FormControl>

           <Button disabled={!input} type='submit' onClick={addTodo} variant="contained" color="primary">
             Add Todo
           </Button>
           {/* <button type='submit' onClick={addTodo}>Add Todo</button> */}
      </form>
      
      <ul>
        {todos.map(todo=>(
          //<li>{todo}</li>
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
