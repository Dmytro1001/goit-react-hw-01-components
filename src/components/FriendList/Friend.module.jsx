import styled from '@emotion/styled';

const root = {
  backgroundColor: '#ffffff',
  boxShadowColor: '#d6d6d6',
  border: '#5b5b5b',
  secondTextColor: '#5b5b5b',
  fontSizeName: '20px',
  fontSizeText: '16px',
};

export const FriendList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: center;
  gap: 10px;
  width: 210px;
`;

export const FriendListItem = styled.li`
  display: flex;
  align-items: center;
  justify-self: center;
  background-color: #fff;
  width: 100%;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 3px 3px 3px 3px ${root.boxShadowColor};
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 15px;
  background-color: ${props => {
    return props.isActive ? 'green' : 'red';
  }};
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 5px;
  margin-right: 15px;
`;

export const UserName = styled.p`
  font-weight: 700;
  font-size: ${root.fontSizeName};
  line-height: 1.67;
`;
