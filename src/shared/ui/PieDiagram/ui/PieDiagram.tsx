import { PieChart, Pie, Cell } from "recharts";
import style from "./PieDiagram.module.scss";

const data = [
  { name: "оценка 5", value: 100 },
  { name: "оценка 4", value: 200 },
  { name: "оценка 3", value: 300 },
  { name: "оценка 2", value: 400 },
];

const COLORS = ["#7F9DFF", "#31C5B7", "#FFC73A", "#FC7557"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const PieDiagram = () => {
  return (
    <div className={style.diagramBlock}>
      <div className={style.pieDiagram}>
        <PieChart width={200} height={200}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
      <div className={style.description}>
        {data.map((item, id) => (
          <div className={style.descriptionBlock}>
            <div
              style={{ backgroundColor: COLORS[id] }}
              className={style.cycle}
            />
            - {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};
export default PieDiagram;
