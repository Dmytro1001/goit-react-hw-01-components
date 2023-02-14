import PropTypes from 'prop-types';
import {
  FriendListItem,
  StatusOn,
  StatusOff,
  Avatar,
  UserName,
} from './Friend.module';

export const FriendsListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendListItem>
      {isOnline ? <StatusOn></StatusOn> : <StatusOff></StatusOff>}
      <Avatar src={avatar} alt={name} />
      <UserName>{name}</UserName>
    </FriendListItem>
  );
};

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
