'use client';
import { createContext, useContext } from 'react';

const ApiContext = createContext<{ baseUrl: string }>({
  baseUrl: process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001',
});

export const ApiProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ApiContext.Provider value={{ baseUrl: process.env.NEXT_PUBLIC_API_URL! }}>
      {children}
    </ApiContext.Provider>
  );
};

export const useApiContext = () => useContext(ApiContext);
