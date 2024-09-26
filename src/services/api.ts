// services/api.ts
export const fetcher = async (url: string, options?: RequestInit) => {
    const response = await fetch(url, {
      method: 'GET',
      ...options,
    });
  
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
  
    return await response.json();
  };
  