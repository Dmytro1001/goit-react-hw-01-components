import styled from '@emotion/styled';

const root = {
  backgroundColor: '#ffffff',
  boxShadowColor: '#d6d6d6',
  border: '#5b5b5b',
  secondTextColor: '#5b5b5b',
  fontSizeName: '20px',
  fontSizeText: '16px',
};

export const CardWrapper = styled.div`
  width: 270px;
  border-radius: 5px;
  border: 1px solid ${root.border};
  box-shadow: 3px 3px 3px 3px ${root.boxShadowColor};
  background-color: ${root.backgroundColor};
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
`;

export const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

export const UserData = styled.p`
  margin: 0;
  margin-top: 10px;
  font-weight: 700;
  font-size: ${root.fontSizeName};
  line-height: 1.67;
  &.subtitle {
    font-weight: normal;
    font-size: ${root.fontSizeText};
    color: ${root.secondTextColor};
  }
`;

export const StatsList = styled.ul`
  display: flex;
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 10px 0;
  background-color: ${root.boxShadowColor};
  border-top: 1px solid ${root.border};
  border-right: 1px solid ${root.border};
  &:last-child {
    border-right: none;
  }
`;

export const Label = styled.span`
  font-size: ${root.fontSizeText};
  line-height: 1.14;
  color: ${root.secondTextColor};
`;

export const Quantity = styled.span`
  font-weight: 700;
  font-size: ${root.fontSizeText};
  line-height: 1.14;
`;
