import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HomePageSection = styled.section`
background: linear-gradient(106.5deg, rgba(255, 215, 185, 0.91) 23%, rgba(223, 159, 247, 0.8) 93%);
height: calc(100vh - 50px);
display:flex;
align-items: center;


`;
export const HomePageContainer = styled.div`
  box-sizing: border-box;
//   display: flex;


  padding: 0px 15px;

  @media screen and (min-width: 480px) {
    width: 480px;
    margin: 0 auto;
  }

  @media screen and (min-width: 1280px) {
    width: 600px;
    margin: 0 auto;
  }
`;
export const HomePageWrap = styled.div`
display: flex;
  max-width: 400px;
  margin: 20px auto;
  padding: 20px 30px;
  border-radius: 10px;
  box-shadow: rgb(150, 150, 150) 10px 10px 20px;
  background-color: #fff;
`;

export const HomePageButtons = styled.div`
display: flex;
  max-width: 400px;
  margin: 20px auto;
  padding: 20px 30px;
  justify-content: center;
`;

export const HomePageLink = styled(Link)`
  color: rgb(0 177 163);
`;