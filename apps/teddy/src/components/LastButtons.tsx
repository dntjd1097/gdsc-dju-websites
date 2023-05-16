import React, { useState } from 'react';

import styled from 'styled-components';

const Btn1 = styled.button`
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  font-family: 'Google Sans';
  font-style: normal;
  font-weight: 500;
  line-height: 23px;
  height: 35px;
  font-size: 18px;
  justify-content: center;
  align-items: center;
  top: 17px;
  border-radius: 18px;
  background-color: var(--grey100);
  color: var(--grey700);
  border: none;
  flex: none;
  order: 0;
  flex-grow: 0;
  &:nth-child(1) {
    width: 69px;
    left: 897px;
  }
  &:nth-child(2) {
    width: 92px;
    left: 978px;
  }
  &.active {
    background-color: var(--static-orange900);
    color: var(--grey50);
  }
  &.default {
    background-color: var(--static-orange900);
    color: var(--grey50);
    &:nth-child(2) {
      background-color: var(--grey100);
      color: var(--grey700);
    }
  }
`;

const Btn2 = styled.button`
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  font-family: 'Google Sans';
  font-style: normal;
  font-weight: 500;
  line-height: 23px;
  height: 35px;
  font-size: 18px;
  padding: 6px 24px;
  justify-content: center;
  align-items: center;
  top: 17px;
  border-radius: 18px;
  background-color: var(--grey100);
  color: var(--grey700);
  border: none;
  flex: none;
  order: 0;
  flex-grow: 0;
  &:nth-child(1) {
    width: 107px;
    left: 1082px;
  }
  &:nth-child(2) {
    width: 112px;
    left: 1201px;
  }
  &.active {
    background-color: var(--static-orange900);
    color: var(--grey50);
  }
  &.default {
    background-color: var(--static-orange900);
    color: var(--grey50);
    &:nth-child(1) {
      background-color: var(--grey100);
      color: var(--grey700);
    }
  }
`;

const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

const LastButtons: React.FC = () => {
  const data1 = ['To', 'From'];
  const data2 = ['Montly', 'Weekly'];

  const [btnActive1, setBtnActive1] = useState('');
  const [btnActive2, setBtnActive2] = useState('');

  const toggleActive1 = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    setBtnActive1(e.currentTarget.value);
  };

  const toggleActive2 = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    setBtnActive2(e.currentTarget.value);
  };

  return (
    <>
      <BtnWrapper>
        {data1.map((item: string, idx: number) => (
          <Btn1
            className={`Btn ${btnActive1 === `${idx}` ? 'active' : ''}${
              btnActive1 === '' ? 'default' : ''
            }`}
            onClick={toggleActive1}
            key={idx}
            value={`${idx}`}
          >
            {item}
          </Btn1>
        ))}
      </BtnWrapper>
      <BtnWrapper>
        {data2.map((item: string, idx: number) => (
          <Btn2
            className={`Btn ${btnActive2 === `${idx}` ? 'active' : ''}${
              btnActive2 === '' ? 'default' : ''
            }`}
            onClick={toggleActive2}
            key={idx}
            value={`${idx}`}
          >
            {item}
          </Btn2>
        ))}
      </BtnWrapper>
    </>
  );
};

export default LastButtons;
