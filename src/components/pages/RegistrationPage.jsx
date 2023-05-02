import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup } from 'services/contactsApi';

const RegistrationPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  const handleSubmit = event => {
    event.preventDefault();
    const newUser = {
      name: event.target.username.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };

      signup(newUser)
      .then(()=> {
        console.log('user created')
        navigate('/login')
      })
      .catch((error) => console.log(error))  
  };

  return (
    <div>
      <h1>Регистрация</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={event => setUsername(event.target.value)}
          required
        />
        <br />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={event => setEmail(event.target.value)}
          required
        />
        <br />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
          required
        />
        <br />

        <button type="submit">SIGNUP</button>
      </form>
    </div>
  );
};

export default RegistrationPage;
