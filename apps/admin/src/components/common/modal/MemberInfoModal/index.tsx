import React from 'react';

import { AnimatePresence } from 'framer-motion';

import { GDSCButton } from '@common/Button';
import {
  ButtonWrapper,
  ModalBackgroundWrapper,
  ModalInner,
} from '@common/modal/styled';
import { useModalHandle } from '@src/hooks/useModalHandle';
import OutsideClickHandler from '@utils/OutsideClickHandler';
import {IUserDataType} from "@type/userDataType";
import {putMemberData} from "@src/apis/UserService";



type Props = {
  selectMember: IUserDataType | null;
}
const MemberInfoModal = (selectMember: Props) => {
  const { modal, closeModal } = useModalHandle('MEMBER');

  const updateMemberInfo = async () => {
    if(selectMember.selectMember) {
      await putMemberData({
        userId: selectMember.selectMember?.userId,
        role: 'CORE',
      });
    }
  }

  return (
    <AnimatePresence>
      {modal.isOpen && (
        <ModalBackgroundWrapper
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <OutsideClickHandler
            outsideClick={() => {
              closeModal();
            }}
          >
            <ModalInner>
              <ButtonWrapper>
                <GDSCButton text={'권한주기'} color={'blue900'} onClick={updateMemberInfo} />
                <GDSCButton text={'뒤로가기'} color={'grey400'} />
              </ButtonWrapper>
            </ModalInner>
          </OutsideClickHandler>
        </ModalBackgroundWrapper>
      )}
    </AnimatePresence>
  );
};

export default MemberInfoModal;
