import React from 'react';

import styled from 'styled-components';

import FirstCard from './Card';

const LastText = styled.h1`
  position: absolute;
  width: 239px;
  height: 38px;
  left: 211px;
  top: 130px;
  font-size: 32px;
  color: var(--grey900);
  line-height: 38px;
`;

const FirstText = styled.h1`
  position: absolute;
  width: 83px;
  height: 38px;
  left: 120px;
  top: 130px;
  font-size: 32px;
  color: var(--static-orange900);
  line-height: 38px;
`;

const FirstBodyText = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
`;

const SecondBodyText = styled.div`
  position: absolute;
  width: auto;
  height: 29px;
  left: 120px;
  top: 456px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: var(--grey800);
`;

const Body: React.FC = () => {
  return (
    <>
      <FirstBodyText>
        <FirstText>이번주</FirstText>
        <LastText>테디베어의 주인공!</LastText>
      </FirstBodyText>
      <FirstCard />
      <SecondBodyText>이번주 받은 테디베어</SecondBodyText>
      <></>
    </>
  );
};

export default Body;
