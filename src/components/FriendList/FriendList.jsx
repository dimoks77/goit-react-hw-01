import css from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li key={id} className={css.friendItem}>
          <div className={css.container}>
            <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
            <h3 className={css.name}>{name}</h3>
            <p className={isOnline ? css.online : css.offline}>
              {isOnline ? "Online" : "Offline"}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
