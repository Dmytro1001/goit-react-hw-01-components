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
  width: 270px;
`;

export const FriendListItem = styled.li`
  display: flex;
  align-items: center;
  justify-self: center;
  background-color: #fff;
  width: 100%;
  padding: 5px;
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
`;

export const StatusOff = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: red;
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 5px;
`;

export const UserName = styled.p`
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
