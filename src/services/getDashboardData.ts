const BASE_URL = `${import.meta.env.VITE_API_URL}/dashboard`;

const getHeaders = () => ({
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'include': 'credentials',
});

export const getDashboardData = async () => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'GET',
      headers: getHeaders(),
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    throw error;
  }
};