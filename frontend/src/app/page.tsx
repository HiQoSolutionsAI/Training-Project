'use client';

import { useEffect, useState } from 'react';
import { useApiContext } from '@/contexts/apiContext';
import { apiClient } from '@/lib/api';

export default function Home() {
  interface User {
    name: string;
  }

  const { baseUrl } = useApiContext();
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    apiClient
      .get(baseUrl, '/users')
      .then((data) => setUsers(data as User[]))
      .catch((err) => console.log(err.message));
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
