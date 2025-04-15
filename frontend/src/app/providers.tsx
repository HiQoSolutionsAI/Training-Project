'use client';

import { ApiProvider } from '@/contexts/apiContext';

export function Providers({ children }: { children: React.ReactNode }) {
  return <ApiProvider>{children}</ApiProvider>;
}
