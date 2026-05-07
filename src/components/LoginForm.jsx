
import React from 'react'
import Button from './Button';

function LoginForm({ loginData, handleChange, handleSubmit }) {
  return (
    <div>
      <h2>Please Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:
          <input type="email" name="email" id="email" value={loginData.email} onChange={handleChange}/>
        </label>
        <label htmlFor="username">Username:
          <input type="text" name="username" id="username" value={loginData.username} 
          onChange={handleChange}/>
        </label>
        <label htmlFor="password">Password:
          <input type="password" name="password" id="password" value={loginData.password} 
          onChange={handleChange}/>
        </label>
        <label htmlFor="age">Age:
          <input type="number" name="age" id="age" value={loginData.age} onChange={handleChange}/>
        </label>
        <Button text="Submit" color="blue"/>
      </form>
    </div>
  );
}

export default LoginForm