import { useState } from "react";
// import { Navigate } from "react-router-dom";
import { createContactThunk } from "redux/store/thunk";

const LoginPage = () => {

    // const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const newUser = {
            email: event.target.email.value,
            password: event.target.password.value
        }
        createContactThunk(newUser).then(()=> {console.log('user created');})
        // Navigate('/contactForm')
        // addContactsThunk(newUser).then(() => console.log('created')).catch((error) => console.log(error.message[0]))
      }

    return (
        <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} required /><br />
  
          <label htmlFor="password">Пароль:</label>
          <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} required /><br />

          <button type="submit">Зарегистрироваться</button>
        </form>
      </div>
    )
}

export default LoginPage