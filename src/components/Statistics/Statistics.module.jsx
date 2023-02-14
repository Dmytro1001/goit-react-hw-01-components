import styled from '@emotion/styled';

const root = {
  backgroundColor: '#ffffff',
  boxShadowColor: '#d6d6d6',
  border: '#5b5b5b',
  secondTextColor: '#ffffff',
  fontSizeName: '20px',
  fontSizeText: '14px',
};

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 270px;
  border-radius: 5px;
  box-shadow: 3px 3px 3px 3px ${root.boxShadowColor};
  background-color: ${root.backgroundColor};
`;

export const Title = styled.h2`
  margin: 20px auto;
  align-items: center;
  font-size: ${root.fontSizeName};
  line-height: 1.67;
`;

export const StatList = styled.ul`
  display: flex;
  align-items: center;
  justify-self: center;
  width: 100%;
`;

export const StatItem = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 10px 0;
  background-color: blue;
  &:nth-of-type(2n) {
    background-color: red;
  }
  &:nth-of-type(3n) {
    background-color: teal;
  }
  &:nth-of-type(4n) {
    background-color: orange;
  }
  &:nth-of-type(5n) {
    background-color: tomato;
  }
`;

export const LabelText = styled.span`
  font-size: ${root.fontSizeText};
  line-height: 1.25;
  color: ${root.secondTextColor};
`;

export const Percentage = styled.span`
  font-size: ${root.fontSizeName};
  line-height: 1.25;
  color: ${root.secondTextColor};
`;
