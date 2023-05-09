import { Header } from 'components/Header/Header';
// import { useNavigate } from 'react-router-dom';
import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import {
  HomePageButtons,
  HomePageContainer,
  HomePageSection,
  HomePageWrap,
} from './Home.styled.js';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate()
  const handleClick = (e) => {
    if(e.target.innerText === 'LOG IN'){
      navigate('/login')
    } else{
      navigate('/signup')
    }

  }
  return (
    <>
    <Header />
    <HomePageSection>
      
    <HomePageContainer>
      <HomePageWrap>
        <p>
          Hello, welcome to the "Phonebook" application, in which it is
          very convenient to store any number of contact data, which will be
          available to you on any device after a short{' '}
        </p>
      </HomePageWrap>
      <HomePageButtons>
      <Stack spacing={2} direction="row">
  
      <Button variant="contained" onClick={handleClick}>Log in</Button>
      <Button variant="contained" onClick={handleClick}>Sign up</Button>
    </Stack>
      </HomePageButtons>


    </HomePageContainer>
  </HomePageSection>
  </>
    // <>
    //   <Header />
    //   <div className={css.background}></div>
    //   <main>
    //     <Button variant="contained">Contained</Button>
    //   </main>
    // </>
  );
}

export default HomePage;

//   {/* <div>
//   <h1>Phonebook</h1>
//   <p>Для продолжения работы необходимо авторизоваться или зарегистрироваться.</p>
//   <div>
//     <button onClick={() => navigate("/login")}>LOGIN</button>
//     <button onClick={() => navigate("/signup")}>SIGNUP</button>
//   </div>
// </div> */}


// {<HomePageLink to="/register"> Registration </HomePageLink>}
// or
// {<HomePageLink to="/login"> Login </HomePageLink>}
// if you already have an account.