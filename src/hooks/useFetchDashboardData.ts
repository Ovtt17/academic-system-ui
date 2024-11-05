import { useEffect, useState } from "react";
import { DashboardData } from "../types/dashboardData";
import { getDashboardData } from "../services/getDashboardData";

const useFetchDashboardData = () => {
  const [data, setData] = useState<DashboardData>({} as DashboardData);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDashboardData();
        setData(data);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
}

export default useFetchDashboardData;