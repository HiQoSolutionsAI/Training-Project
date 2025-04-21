export const apiClient = {
  async get<T>(baseUrl: string, path: string): Promise<T> {
    const res = await fetch(`${baseUrl}${path}`);
    if (!res.ok) throw new Error(`Error: ${res.status}`);
    return res.json();
  },
};
