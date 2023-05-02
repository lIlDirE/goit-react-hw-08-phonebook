import { useState } from 'react';
import { signup } from 'services/contactsApi';

const RegistrationPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    const newUser = {
      name: event.target.username.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };

    signup(newUser)
      .then(() => console.log('created'))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1>Регистрация</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Имя пользователя:</label>
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

        <label htmlFor="password">Пароль:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
          required
        />
        <br />
        {/* 
        <label htmlFor="confirm_password">Подтвердите пароль:</label>
        <input
          type="password"
          id="confirm_password"
          value={confirmPassword}
          onChange={event => setConfirmPassword(event.target.value)}
          required
        />
        <br /> */}

        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
};

export default RegistrationPage;
