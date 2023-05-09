import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AppMainContainer = styled.form`
  padding: 0 15px;
  height: 50px;
  align-items: space-betwen;
  display: flex;
  justify-content: space-between;
`;

export const AppContainer = styled.div`
align-items: center;
  display: flex;
`;

export const AppLeftContainer = styled.div`
align-items: center;
  display: flex;
`;

export const AppLogoutContainer = styled.div`
width: 300px;
justify-content: space-around;
  align-items: center;
  display: flex;
`;

export const StyledNavLink = styled(NavLink)`
  color: #fff;
  font-size: 1.17em;
  text-decoration: none;
  height: 40px;
  padding: 0 40px;
  display: flex;
  align-items: center;
`;


export const StyledName = styled(NavLink)`
color: #fff;
  font-size: 1.17em;
  text-decoration: none;
  height: 40px;
  padding: 0 40px;
  display: flex;
  align-items: center;
`;

export const UserText = styled.h4`
margin: 0;
    font-family: "Roboto","Helvetica","Arial",sans-serif;
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 1.6;
    letter-spacing: 0.0075em;
`