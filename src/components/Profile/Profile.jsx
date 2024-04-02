import css from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
    return (
      <div className={css.profileContainer}>
        <div>
          <img
            src={image}
            alt="User avatar"
            className={css.avatar}
          />
          <p className={css.name}>{name}</p>
          <p className={css.tag}>{`@${tag}`}</p>
          <p className={css.location}>{location}</p>
        </div>
  
        <ul className={css.statsList}>
          <li>
            <span>Followers</span>
            <span>{stats.followers}</span>
          </li>
          <li>
            <span>Views</span>
            <span>{stats.views}</span>
          </li>
          <li>
            <span>Likes</span>
            <span>{stats.likes}</span>
          </li>
        </ul>
      </div>
    );
  };
  
  export default Profile;
  