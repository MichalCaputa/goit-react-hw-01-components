import PropTypes from 'prop-types';
import css from './profile.module.css';
export const Profile = ({ profile }) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={profile.avatar} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{profile.username}</p>
        <p className={css.tag}>@{profile.tag}</p>
        <p className={css.location}>{profile.location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{profile.stats.followers}</span>
        </li>
        <li>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{profile.stats.views}</span>
        </li>
        <li>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{profile.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  profile: PropTypes.shape({
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
      followers: PropTypes.number,
      views: PropTypes.number,
      likes: PropTypes.number,
    }),
  }).isRequired,
};
