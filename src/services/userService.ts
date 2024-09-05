export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
  }
  
  export const fetchUsersAPI = async (): Promise<User[]> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    return response.json();
  };