import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import {
  AlertIcon,
  AlertInner,
  AlertInnerWrapper,
  AlertText,
  AlertWrapper,
} from './styled';

import ErrorIcon from '@assets/ErrorIcon.svg';
import { AnimatePresence } from 'framer-motion';
import { alertState } from '@src/store/alert';
import CheckIcon from '@assets/icons/CheckIcon.svg';

const variants = {
  active: {
    opacity: 1,
    scale: 1,
  },
  unActive: {
    opacity: 0,
    scale: 0,
  },
};
const Alert = () => {
  const [alert, setAlert] = useRecoilState(alertState);

  useEffect(() => {
    const alertTimer = setTimeout(() => {
      setAlert({
        ...alert,
        alertHandle: false,
      });
    }, 4000);
    return () => clearTimeout(alertTimer);
  }, [alert.alertHandle]);
  const alertStatusColor = {
    success: '#55af7a',
    error: '#f44336',
    warning: '#ffa50e',
  };
  const alertIcon = {
    success: CheckIcon,
    error: ErrorIcon,
    warning: ErrorIcon,
  };
  return (
    <AnimatePresence>
      {alert.alertHandle && (
        <AlertWrapper>
          <AlertInner
            variants={variants}
            exit={'unActive'}
            animate={'active'}
            initial={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.5 }}
          >
            <AlertInnerWrapper alertColor={alertStatusColor[alert.alertStatus]}>
              <AlertIcon src={alertIcon[alert.alertStatus]} alt={'alertIcon'} />
              <AlertText>{alert.alertMessage}</AlertText>
            </AlertInnerWrapper>
          </AlertInner>
        </AlertWrapper>
      )}
    </AnimatePresence>
  );
};

export default Alert;
