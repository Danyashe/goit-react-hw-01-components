import Profile from 'components/profile/profile';
import user from './data/user.json';
import Statistics from 'components/statistics/statistics';
import data from './data/dataStatistics.json';
import { FriendList } from 'components/FriendList/FriendList';
import friends from './data/friends.json';
import { TableTransactionHistory } from 'components/TransactionHistory/TableTransaction';
import transactions from './data/transactions.json';

export default function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TableTransactionHistory transactions={transactions} />
    </div>
  );
}
