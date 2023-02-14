import PropTypes from 'prop-types';
import {
  CardWrapper,
  Description,
  Avatar,
  UserData,
  StatsList,
  StatsItem,
  Label,
  Quantity,
} from './Profile.module';

export const Profile = ({ username, tag, location, avatar, stats }) => (
  <CardWrapper>
    <Description>
      <Avatar src={avatar} alt={username} />
      <UserData>{username}</UserData>
      <UserData className="subtitle">@{tag}</UserData>
      <UserData className="subtitle">{location}</UserData>
    </Description>

    <StatsList>
      <StatsItem>
        <Label>Followers</Label>
        <Quantity>{stats.followers}</Quantity>
      </StatsItem>
      <StatsItem>
        <Label>Views</Label>
        <Quantity>{stats.views}</Quantity>
      </StatsItem>
      <StatsItem>
        <Label>Likes</Label>
        <Quantity>{stats.likes}</Quantity>
      </StatsItem>
    </StatsList>
  </CardWrapper>
);

Profile.protoTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
