import React, { useState } from 'react';

import { useTheme, changeTheme } from '@gdsc-dju/gds-theme';

import styled, { keyframes } from 'styled-components';

import DarkModeIcon from '../../assets/darkModeIcon';
import LightModeIcon from '../../assets/lightModeIcon';

const startAnimation = keyframes`
  0% {
    transform: rotate(200deg);
    scale: 0.5;
    opacity: 0.5;
  }
  100% {
    transform: rotate(360deg);
    scale: 1;
    opacity: 1;
  }
`;

const StyledThemeButton = styled.button`
  position: absolute;
  height: 26px;
  left: 1334px;
  top: 22px;
  border-style: none;
  cursor: pointer;

  &:hover {
    transition: 0.3s;
  }
`;
const ButtonWrapper = styled.div<{ isActive: boolean }>`
  animation-fill-mode: forwards;
  left: 92.85%;
  right: 5.8%;
  top: 2.27%;
  bottom: 95.83%;
  width: 26px;
  animation: ${({ isActive }) => isActive && startAnimation} 0.6s ease-in-out;
`;

const ThemeButton = () => {
  const [animate, setAnimate] = useState(false);
  const [theme] = useTheme();
  const isDarkMode = theme === 'dark';
  return (
    <StyledThemeButton
      name={'theme-toggle-button'}
      aria-label={'theme-toggle-button'}
      onClick={() => {
        setAnimate(true);
        changeTheme();
      }}
    >
      <ButtonWrapper
        isActive={animate}
        onAnimationEnd={() => setAnimate(false)}
      >
        {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
      </ButtonWrapper>
    </StyledThemeButton>
  );
};
export default ThemeButton;
