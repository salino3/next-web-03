import React from "react";

interface User {
  id: number;
  name: string;
}

const UsersPage: React.FC = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    // cache: 'no-store', // "no-store", new API call every refresh page
    next: { revalidate: 10 }, // catching data for every user using the same data
  });
  const users: User[] = await res.json();

  return (
    <div className="rootUsersPage">
      <h1>
        UsersPage <strong>{new Date().toLocaleTimeString()}</strong>
      </h1>
      <ul>
        {users.map((user: User) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
