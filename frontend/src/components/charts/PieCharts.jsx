import { Pie, PieChart, ResponsiveContainer, Sector } from 'recharts';
// import { SectorProps } from 'recharts/types/component/Shape/Sector';

// type Coordinate = {
//   x: number;
//   y: number;
// };

// type PieSectorData = {
//   percent?: number;
//   name?: string | number;
//   midAngle?: number;
//   middleRadius?: number;
//   tooltipPosition?: Coordinate;
//   value?: number;
//   paddingAngle?: number;
//   dataKey?: string;
//   payload?: any;
// };

// type PieSectorDataItem = React.SVGProps<SVGPathElement> & Partial<SectorProps> & PieSectorData;

const data = [
  { name: 'Group A', value: 400, fill: '#ff0000' },
  { name: 'Group B', value: 300, fill: '#808080' },
  { name: 'Group C', value: 300, fill: '#ff0000' },
  { name: 'Group D', value: 200, fill: '#808080' },
];

const colors = ['#ff0000', '#808080', '#ff0000', '#808080'];

const renderActiveShape = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  startAngle,
  endAngle,
  fill,
  payload,
  percent,
  value,
}) => { // PieSectorDataItem (if typeScript)
  const RADIAN = Math.PI / 180;
  const sin = Math.sin(-RADIAN * (midAngle ?? 1));
  const cos = Math.cos(-RADIAN * (midAngle ?? 1));
  const sx = (cx ?? 0) + ((outerRadius ?? 0) + 10) * cos;
  const sy = (cy ?? 0) + ((outerRadius ?? 0) + 10) * sin;
  const mx = (cx ?? 0) + ((outerRadius ?? 0) + 30) * cos;
  const my = (cy ?? 0) + ((outerRadius ?? 0) + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
        stroke="none"
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={(outerRadius ?? 0) + 6}
        outerRadius={(outerRadius ?? 0) + 10}
        fill={fill}
        stroke="none"
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke="none" fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Rate ${((percent ?? 1) * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

export default function PieCharts() {
  return (
    <div style={{ outline: 'none', border: 'none', boxShadow: 'none' }}>
      <ResponsiveContainer width={500} height={500} style={{ outline: 'none', border: 'none', boxShadow: 'none' }}>
        <PieChart
          width={300}
          height={300}
          style={{ outline: 'none', WebkitFocusRingColor: 'transparent', MozFocusRingColor: 'transparent', border: 'none', boxShadow: 'none' }}
          tabIndex={-1} // prevent focus outline on click
        >
          <Pie
            activeShape={renderActiveShape}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            fill={(entry, index) => colors[index % colors.length]}
            stroke="none"
            dataKey="value"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
