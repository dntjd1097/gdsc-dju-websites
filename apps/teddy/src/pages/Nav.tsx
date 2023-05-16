import styled from 'styled-components';

const NavContainer = styled.div`
  position: absolute;
  width: 1440px;
  height: 70px;
  left: -1px;
  top: -1px;
`;
const Title = styled.h1`
  position: absolute;
  font-family: 'Google Sans';
  font-style: normal;
  color: var(--grey900);
  height: 31px;
  top: 19px;
`;
const FirstText = styled.h1`
  position: absolute;
  color: var(--static-orange900);
  font-size: 24px;
  line-height: 31px;
  width: 124px;
  left: 79px;
`;

const LastText = styled.h1`
  position: absolute;
  width: 127px;
  left: 207px;
  font-size: 24px;
  left: 207px;
  line-height: 31px;
`;

const Nav: React.FC = () => {
  return (
    <NavContainer>
      <Title>
        <FirstText>TeddyBear</FirstText>
        <LastText>DashBoard</LastText>
      </Title>
    </NavContainer>
  );
};

export default Nav;
