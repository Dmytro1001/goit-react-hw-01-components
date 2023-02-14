import PropTypes from 'prop-types';
import { FriendsListItem } from './Friend';
import { FriendList } from './Friend.module';

export const FriendsList = ({ friends }) => {
  return (
    <FriendList>
      {friends.map(item => (
        <FriendsListItem
          key={item.id}
          avatar={item.avatar}
          name={item.name}
          isOnline={item.isOnline}
        />
      ))}
    </FriendList>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
