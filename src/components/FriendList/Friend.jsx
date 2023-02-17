import PropTypes from 'prop-types';
import { FriendListItem, Status, Avatar, UserName } from './Friend.module';

export const FriendsListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendListItem>
      <Status isActive={isOnline}></Status>
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
