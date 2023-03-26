import PropTypes from 'prop-types';
import css from './friends.module.css';
export const FriendsList = ({ friends }) => {
  return (
    <ul className={css['friends-list']}>
      {friends.map(friend => (
        <li key={friend.id.toString()} className={css.item}>
          <span
            className={
              friend.isOnline ? css.status : css.status + ' ' + css.isOnline
            }
          ></span>
          <img
            className={css.avatar}
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className={css.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    })
  ),
};
