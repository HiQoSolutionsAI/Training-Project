'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  interface User {
    name: string;
  }

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h1>Uers:</h1>
      <ul>
        {users.map((user: User, index) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
