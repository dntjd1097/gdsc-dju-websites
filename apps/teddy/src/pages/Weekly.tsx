import React from 'react';

import styled from 'styled-components';

import ThemeButton from '../components/common/ThemeButton';
import LastButtons from '../components/LastButtons';

import Body from './Body';
import Nav from './Nav';

const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Weekly = () => {
  return (
    <>
      <Nav />
      <BtnContainer>
        <LastButtons />
        <ThemeButton />
      </BtnContainer>
      <Body />
    </>
  );
};

export default Weekly;
