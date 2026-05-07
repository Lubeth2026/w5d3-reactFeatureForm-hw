
import './App.css'
import { useState } from 'react'
import LoginForm from './components/LoginForm'

function App() {
//Login Form Data object to store all inputs//FORM STATE//
  const [loginData, setLoginData] = useState({
    email: "",
    name: "",
    password: "",
    age: "",
  });

//FORM state UPDATE//
//Handle Input Changes//
  function handleChange(event) {
    const { name, value } = event.target;
    console.log(name, value);
    setLoginData({ ...loginData, [name]: value });
  }

  return (
    <>
      <h1>React Form Day 3 Assignment</h1>
      <LoginForm loginData={loginData} handleChange={handleChange} />
    </>
  );
}

export default App
