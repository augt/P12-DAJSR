import DailyActivityGraphCSS from "./DailyActivityGraph.module.css";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function DailyActivityGraph(props) {
  const { sessions } = props;

  const CustomTooltip = ({ payload }) => {
    if (payload && payload.length) {
      return (
        <div className={DailyActivityGraphCSS.daily_activity_graph_tooltip}>
          <span
            className={DailyActivityGraphCSS.daily_activity_graph_tooltip_text}
          >{`${payload[0].value}kg`}</span>
          <span
            className={DailyActivityGraphCSS.daily_activity_graph_tooltip_text}
          >{`${payload[1].value}Kcal`}</span>
        </div>
      );
    }
    return null;
  };
  return (
    <div className={DailyActivityGraphCSS.daily_activity_graph_container}>
      <div className={DailyActivityGraphCSS.daily_activity_graph_header}>
        <h2 className={DailyActivityGraphCSS.daily_activity_graph_title}>
          Activité quotidienne
        </h2>
        <div className={DailyActivityGraphCSS.daily_activity_graph_legend}>
          <div>
            <img src="../black-dot-icon.svg" alt="icône point noir" />
            <span>Poids (Kg)</span>
          </div>
          <div>
            <img src="../red-dot-icon.svg" alt="icône point rouge" />
            <span>Calories brûlées (kCal)</span>
          </div>
        </div>
      </div>
      <ResponsiveContainer width={"100%"} height={300}>
        <BarChart
          width={835}
          height={300}
          data={sessions}
          margin={{
            top: 34,
            right: 29,
            left: 43,
            bottom: 26,
          }}
          barGap={8}
        >
          <CartesianGrid strokeDasharray="2 2" vertical={false} />
          <XAxis
            dataKey="name"
            tickLine={false}
            tick={{ fontSize: 14, fill: "#9B9EAC" }}
            stroke="#DEDEDE"
            dy={15}
          />
          <YAxis
            yAxisId="left"
            orientation="right"
            tickCount={3}
            tickLine={false}
            tick={{ fontSize: 14, fill: "#9B9EAC" }}
            dx={15}
            axisLine={false}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            stroke="#82ca9d"
            hide={true}
          />
          <Tooltip
            content={<CustomTooltip />}
            wrapperStyle={{ outline: "none" }}
          />
          <Bar
            yAxisId="left"
            dataKey="kg"
            fill="#282D30"
            radius={[8, 8, 0, 0]}
            barSize={7}
          />
          <Bar
            yAxisId="right"
            dataKey="Kcal"
            fill="#E60000"
            radius={[8, 8, 0, 0]}
            barSize={7}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DailyActivityGraph;
