import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";

interface IssuedOverTimeData {
  month: string;
  issued: number;
}

interface IssuedOverTimeChartProps {
  data: IssuedOverTimeData[];
}

const IssuedOverTimeChart: React.FC<IssuedOverTimeChartProps> = ({ data }) => {
  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h2 className="text-lg font-semibold">Issued Over Time</h2>
      <LineChart width={400} height={300} data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="issued" stroke="#FF8042" />
      </LineChart>
    </div>
  );
};

export default IssuedOverTimeChart;
