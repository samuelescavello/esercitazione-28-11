import UserNotifications from "../UserNotifications/UserNotifications";
function UserDashboard({ user }) {
  return (
    <>
      <div>UserDashboard</div>
      <div>
        <h3>{user.name}</h3>
        <p>{user.email}</p>
        <p>{user.status}</p>
      </div>

      <div>
        {user.status == "premium" ? (
          <div>
            {user.hobbies.map((u) => (
              <p key={u}>{u}</p>
            ))}
          </div>
        ) : (
          "non sei un utente premium"
        )}
      </div>

      <UserNotifications notifiche={user.notifiche} />
    </>
  );
}

export default UserDashboard;
