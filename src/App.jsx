
import './App.css'
import { useState } from 'react'
import LoginForm from './components/LoginForm'

function App() {
//Login Form Data object to store all inputs//FORM STATE//
  const [loginData, setLoginData] = useState({
    email: "",
    username: "",
    password: "",
    age: "",
  });
//This tracks form to see if it's being Submitted//SUBMIT STATE//
  const [submitted, setSubmitted] = useState(false);
//FORM state UPDATE//
//Handle Input Changes//
  function handleChange(event) {
    const { name, value } = event.target;
    //console.log(name, value);
    setLoginData({ ...loginData, [name]: value });
  };
//Handle Form Submit//
  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    console.log(loginData)
  }

  return (
    <>
      <h1>React Form Day 3 Assignment</h1>
      <LoginForm loginData={loginData} handleChange={handleChange} handleSubmit={handleSubmit}/>
      {submitted && (
        <div>
          <h3>Submitted Login Data</h3>
          <p>Email: {loginData.email}</p>
          <p>Username: {loginData.username}</p>
          <p>Password: {loginData.password}</p>
          <p>Age: {loginData.age}</p>
        </div>
      )}
    </>
  );
}

export default App
