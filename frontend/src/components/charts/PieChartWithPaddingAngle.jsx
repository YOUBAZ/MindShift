import { Cell, Pie, PieChart } from "recharts";

export default function PieChartWithPaddingAngle({ value1, value2 }) {
  const data = [
    { name: "Group A", value: value1 },
    { name: "Group B", value: value2 },
    //   { name: "Group C", value: 300 },
    //   { name: "Group D", value: 200 },
  ];
  const COLORS = ["#ebedf2", "#36a3f7"];
  return (
    <PieChart width={210} height={210}>
      <Pie
        data={data}
        cx={100}
        cy={100}
        innerRadius={60}
        outerRadius={100}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell
            key={`cell-${entry.name}`}
            fill={COLORS[index % COLORS.length]}
          />
        ))}
      </Pie>
      {/* <Pie
        data={data}
        cx={420}
        cy={200}
        startAngle={180}
        endAngle={0}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell
            key={`cell-${entry.name}`}
            fill={COLORS[index % COLORS.length]}
          />
        ))}
      </Pie> */}
    </PieChart>
  );
}
