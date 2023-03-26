import { Profile } from '../components/profile/profile.js';
import { Statistics } from '../components/statistic/statistic.js';
import { FriendsList } from '../components/friends/friends.js';
import { TransactionsHistory } from '../components/transactions/transactions.js';
import css from './App.css';
import profileData from '../components/profile/user.json';
import statsData from '../components/statistic/data.json';
import friendsData from '../components/friends/friends.json';
import transactionsData from '../components/transactions/transactions.json';

export const App = () => {
  return (
    <div>
      <div className={css['profile-container']}>
        <Profile profile={profileData} />
      </div>
      <div className={css['statistic-container']}>
        <Statistics stats={statsData} title={'Upload stats'} />
      </div>
      <div className={css['friends-container']}>
        <FriendsList friends={friendsData} />
      </div>
      <div className={css['transactions-container']}>
        <TransactionsHistory transactions={transactionsData} />
      </div>
    </div>
  );
};
