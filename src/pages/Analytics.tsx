import { useState, useEffect } from "react";
import data from "../features/dashboard/data/data.json"; // Ensure the path is correct

// Import Chart Components
import LineChartComponent from "../features/dashboard/components/LineChartcomponent";
import PieChartComponent from "../features/dashboard/components/PieChartComponent";
import BarChartComponent from "../features/dashboard/components/BarChartComponent";

// Define an interface for the expected data shape
interface AnalyticsDataType {
  lineData: { name: string; issued: number; received: number }[];
  pieData: { name: string; value: number }[];
  barData: { name: string; issued: number; received: number }[];
  colors?: string[];
}

const Analytics = () => {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsDataType | null>(null);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    setAnalyticsData(data as AnalyticsDataType);
  }, []);

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Analytics</h1>
      </div>
      <p className="text-gray-600">Insights on issued and received certificates.</p>

      {/* Only render charts if data is available */}
      {isOpen && analyticsData && (
        <div className="mt-4">
          <LineChartComponent data={analyticsData.lineData} />
          <PieChartComponent data={analyticsData.pieData} colors={analyticsData.colors || []} />
          <BarChartComponent data={analyticsData.barData} />
        </div>
      )}
      <div className="flex justify-between items-center">
  <h1 className="text-2xl font-bold">Analytics</h1>
  <button 
    onClick={() => setIsOpen(!isOpen)}
    className="bg-blue-500 text-white px-3 py-1 rounded"
  >
    {isOpen ? "Hide Charts" : "Show Charts"}
  </button>
</div>
    </div>
  );
};

export default Analytics;
