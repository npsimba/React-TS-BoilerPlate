import { useState, useEffect } from "react";
import StatsWidget from "../features/dashboard/components/StatsWidget";
import ActivityLog from "../features/dashboard/components/ActivityLog";
import Charts from "../features/dashboard/components/Chart";
import dashboardDataJson from "../features/dashboard/data/dashboardData.json"; // Import data

interface ChartData {
  issuedReceived: { name: string; value: number }[];
  categoryDistribution: { category: string; issued: number; received: number }[];
  issuedOverTime: { month: string; issued: number }[];
}

interface DashboardData {
  certificatesIssued: number;
  certificatesReceived: number;
  activityLogs: string[];
  charts: ChartData;
}

const UserDashboard = () => {
  const [dashboardData, setDashboardData] = useState<DashboardData>({
    certificatesIssued: 0,
    certificatesReceived: 0,
    activityLogs: [],
    charts: {
      issuedReceived: [],
      categoryDistribution: [],
      issuedOverTime: [],
    },
  });

  useEffect(() => {
    setDashboardData(dashboardDataJson as DashboardData);
  }, []);

  return (
    <div className="p-6 bg-gray-100 flex-1">
      <h1 className="text-2xl font-bold">User Dashboard</h1>
      <p className="text-gray-600">Welcome to your certificate management dashboard.</p>

      {/* Stats Widgets */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <StatsWidget title="Certificates Issued" count={dashboardData.certificatesIssued} />
        <StatsWidget title="Certificates Received" count={dashboardData.certificatesReceived} />
      </div>

      {/* Activity Log */}
      <div className="mt-6">
        <ActivityLog logs={dashboardData.activityLogs} />
      </div>

      {/* Charts Section */}
      <div className="mt-6">
        <Charts data={dashboardData.charts} />
      </div>
    </div>
  );
};

export default UserDashboard;
