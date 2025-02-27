import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

interface CategoryData {
  category: string;
  issued: number;
  received: number;
}

interface CategoryDistributionChartProps {
  data: CategoryData[];
}

const CategoryDistributionChart: React.FC<CategoryDistributionChartProps> = ({ data }) => {
  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h2 className="text-lg font-semibold">Category Distribution</h2>
      <BarChart width={400} height={300} data={data}>
        <XAxis dataKey="category" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="issued" fill="#8884d8" />
        <Bar dataKey="received" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default CategoryDistributionChart;
