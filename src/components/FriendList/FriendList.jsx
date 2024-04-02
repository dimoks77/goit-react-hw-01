import css from "./FriendList.module.css";

const FriendList = ({ friend: { avatar, name, isOnline } }) => {
    const statusClass = isOnline ? css.online : css.offline;
  return (
    <div className={css.container}>
      <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
      <h3 className={css.name}>{name}</h3>
      <p className={statusClass ? 'css.status' : 'css.status.offline'}>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
};

export default FriendList;



