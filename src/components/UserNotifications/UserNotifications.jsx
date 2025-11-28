import { useState } from "react";

export default function UserNotifications({ notifiche }) {
  const [notification, setNotification] = useState(false);

  return (
    <>
      <div>
        <button>show</button>
        <button>x</button>
      </div>
    </>
  );
}
