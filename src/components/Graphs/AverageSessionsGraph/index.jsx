import React from "react";
import { XAxis, YAxis, Tooltip, Rectangle, LineChart, Line } from "recharts";
import AverageSessionsGraphCSS from "./AverageSessionsGraph.module.css";

const CustomTooltip = ({ payload }) => {
  if (payload && payload.length) {
    return (
      <div className={AverageSessionsGraphCSS.tooltip_container}>
        <p
          className={AverageSessionsGraphCSS.tooltip_text}
        >{`${payload[0].value}min`}</p>
      </div>
    );
  }
  return null;
};

const CustomCursor = ({ points, width }) => {
  const [{ x }] = points;
  return (
    <Rectangle fill="hsla(0, 0%, 0%, 9.75%)" x={x} width={width} height={300} />
  );
};

function AverageSessionsGraph({ sessions }) {
  return (
    <div className={AverageSessionsGraphCSS.average_session_graph_background}>
      <h2 className={AverageSessionsGraphCSS.title}>
        Durée moyenne des sessions
      </h2>
      <LineChart
        width={258}
        height={263}
        data={sessions}
        margin={{
          top: 40,
          right: 0,
          left: 4,
          bottom: 40,
        }}
      >
        <defs>
          <linearGradient id="gradualOpacity" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="white" stopOpacity={0.4} />
            <stop offset="100%" stopColor="white" />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="day"
          tickLine={false}
          tick={{ fontSize: 14, fill: "white", opacity: 0.8 }}
          tickMargin={20}
          axisLine={false}
          style={{ transform: "scale(0.9)", transformOrigin: "bottom" }}
        />
        <YAxis hide={true} />
        <Tooltip
          content={<CustomTooltip />}
          wrapperStyle={{ outline: "none" }}
          cursor={<CustomCursor />}
        />
        <Line
          type="monotone"
          dataKey="sessionLength"
          stroke="url(#gradualOpacity)"
          strokeWidth={2.5}
          dot={false}
        />
      </LineChart>
    </div>
  );
}

export default AverageSessionsGraph;
