import styled from 'styled-components';

const TopCardSection = styled.div``;

const CardGrade1 = styled.div`
  position: absolute;
  width: 308px;
  height: 200px;
  left: 120px;
  top: 196px;
  border-radius: 20px;
  background-color: var(--orange900);
`;
const CardGrade2 = styled.div`
  position: absolute;
  width: 308px;
  height: 200px;
  left: 448px;
  top: 196px;
  border-radius: 20px;
  background-color: var(--orange900);
`;
const CardGrade3 = styled.div`
  position: absolute;
  width: 308px;
  height: 200px;
  left: 776px;
  top: 196px;
  border-radius: 20px;
  background-color: var(--orange900);
`;

const Card1 = styled.div`
  position: absolute;
  width: 224px;
  height: 260px;
  left: 120px;
  top: 513px;
  border-radius: 20px;
  background-color: var(--grey100);
`;
const Card2 = styled.div`
  position: absolute;
  width: 224px;
  height: 260px;
  left: 364px;
  top: 513px;
  border-radius: 20px;
  background-color: var(--grey100);
`;
const Card3 = styled.div`
  position: absolute;
  width: 224px;
  height: 260px;
  left: 608px;
  top: 513px;
  border-radius: 20px;
  background-color: var(--grey100);
`;
const Card4 = styled.div`
  position: absolute;
  width: 224px;
  height: 260px;
  left: 852px;
  top: 513px;
  border-radius: 20px;
  background-color: var(--grey100);
`;
const Card5 = styled.div`
  position: absolute;
  width: 224px;
  height: 260px;
  left: 1096px;
  top: 513px;
  border-radius: 20px;
  background-color: var(--grey100);
`;
const Card6 = styled.div`
  position: absolute;
  width: 224px;
  height: 260px;
  left: 120px;
  top: 793px;
  border-radius: 20px;
  background-color: var(--grey100);
`;
const Card7 = styled.div`
  position: absolute;
  width: 224px;
  height: 260px;
  left: 364px;
  top: 793px;
  border-radius: 20px;
  background-color: var(--grey100);
`;

const BottomCardSection = styled.div``;

const Card = () => {
  return (
    <>
      <TopCardSection>
        <CardGrade1></CardGrade1>
        <CardGrade2></CardGrade2>
        <CardGrade3></CardGrade3>
      </TopCardSection>
      <BottomCardSection>
        <Card1></Card1>
        <Card2></Card2>
        <Card3></Card3>
        <Card4></Card4>
        <Card5></Card5>
        <Card6></Card6>
        <Card7></Card7>
      </BottomCardSection>
    </>
  );
};

export default Card;
