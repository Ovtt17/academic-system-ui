import { useEffect, useState, useCallback } from "react";
import { DashboardData } from "../types/dashboardData";
import { getDashboardData } from "../services/getDashboardData";

const useFetchDashboardData = () => {
  const [data, setData] = useState<DashboardData>({ courses: [], students: [], weeklyScores: [], pendingAssignments: [] });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      const data = await getDashboardData();
      setData(data);
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : 'Error desconocido');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData().then();
  }, [fetchData]);

  return { data, loading, error };
}

export default useFetchDashboardData;