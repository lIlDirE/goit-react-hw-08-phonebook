import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AppMainContainer = styled.form`
  padding: 15px;
  align-items: baseline;
  display: flex;
  justify-content: space-between
`;

export const AppContainer = styled.div`
  padding: 15px;
  align-items: baseline;
  display: flex;
`;

export const AppLogoutContainer = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;
  min-width: 150px;
`;

export const StyledNavLink = styled(NavLink)`
  color: black;
  font-size: 1.17em;
  text-decoration: none;
  margin: 10px;
  &.active {
    color: #fff;
    font-weight: bold;
  }
`;
