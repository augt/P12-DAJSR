import React from "react";
import ScoreGraphCSS from "./ScoreGraph.module.css";
import { PieChart, Pie, Cell } from "recharts";

function ScoreGraph({ score }) {
  const data = [{ score }];
  if (score < 100) data.push({ score: 100 - score });

  const Colors = ["#FF0000", "#fbfbfb"];
  return (
    <div className={ScoreGraphCSS.background}>
      <h2 className={ScoreGraphCSS.title}>Score</h2>{" "}
      <div className={ScoreGraphCSS.score}>
        <div className={ScoreGraphCSS.score_top_block}>{data[0].score}%</div>
        <div className={ScoreGraphCSS.score_bottom_block}>
          de votre objectif
        </div>
      </div>
      <PieChart width={258} height={263}>
        <Pie
          data={data}
          innerRadius={80}
          outerRadius={90}
          dataKey="score"
          fill="black"
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={Colors[index]}
              stroke={index === 0 ? null : "#fbfbfb"}
              cornerRadius={10}
            />
          ))}
        </Pie>
        <Pie
          data={data}
          dataKey="score"
          innerRadius={0}
          outerRadius={80}
          isAnimationActive={false}
        >
          {data.map((entry, index) => {
            return <Cell key={`cell-${index}`} fill="white" stroke="white" />;
          })}
        </Pie>
      </PieChart>
    </div>
  );
}

export default ScoreGraph;
