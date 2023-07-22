import React, {useState} from 'react';
import './App.css';
import Header from './Header'
import UserForm from './UserForm'
import UserList from './UserList';


function App() {
  const [users, setUser]=useState([])
  
const addUser=(data)=>{
  setUser(prevState=>[...prevState, data])
  console.log(users)
}
  return (
    <div>
      <Header/>
      <UserForm userData={addUser}/>
      <UserList userData={users}/>
    </div>
  );
}

export default App;
