import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginThunk } from 'redux/store/thunk';
import { toast } from 'react-toastify';

const LoginPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(
      loginThunk({
        email: event.target.email.value,
        password: event.target.password.value,
      })
    )
    .unwrap().then(() => {
      navigate('/contacts')
    })
    .catch(error => {
      if (error.message === 'Unauthorized') {
        toast.error(error.message);
      } else toast.error('Sorry something went wrong try again');
    })
  };

  return (
    <>
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
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

        <button type="submit">LOGIN</button>
        <button onClick={() => navigate('/signUp')}>SIGNUP</button>

      </form>
    </div>
    </>
  );
};



export default LoginPage