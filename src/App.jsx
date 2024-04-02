import userData from "./userData.json";
import friends from "./friends.json";
import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import "./App.css";

const App = () => {
  return (
    <div className="mainApp">
      
        <Profile
          name={userData.username}
          tag={userData.tag}
          location={userData.location}
          image={userData.avatar}
          stats={userData.stats}
        />
      

      <ul className="friendList">
        {friends.map((friend) => (
          <li key={friend.id}>
            <FriendList friend={friend} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
