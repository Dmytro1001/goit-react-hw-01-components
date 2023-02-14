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

// const setBgColor = props => {
//   switch (props.isOnline) {
//     case false:
//       return 'red';
//     case true:
//       return 'green';
//     default:
//       return 'grey';
//   }
// };

export const StatusOn = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: green;
  margin-right: 15px;
`;

export const StatusOff = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: red;
  margin-right: 15px;
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
