import { Container } from './App.module';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendsList } from './FriendList/FriendList';
import user from '../data/user.json';
import data from '../data/statistics.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import { TransactionHistory } from './Transactions/TransactionsList';

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" data={data} />
      <FriendsList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </Container>
  );
};
