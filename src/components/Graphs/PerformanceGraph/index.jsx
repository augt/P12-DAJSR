import React from "react";
import PerformanceGraphCSS from "./PerformanceGraph.module.css";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from "recharts";

function PerformanceGraph({ performance }) {
  return (
    <div className={PerformanceGraphCSS.background}>
      <RadarChart width={258} height={263} data={performance} outerRadius="63%">
        <PolarGrid radialLines={false} />
        <PolarAngleAxis
          dataKey="kind"
          stroke="white"
          tick={{ fontSize: 11, fontWeight: 700 }}
          axisLine={false}
          tickLine={false}
        />
        <Radar
          dataKey="value"
          stroke="rgba(255, 1, 1, 0.70)"
          fill="rgba(255, 1, 1, 0.70)"
        />
      </RadarChart>
    </div>
  );
}

export default PerformanceGraph;
