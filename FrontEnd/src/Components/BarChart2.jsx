import React, { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import axios from "axios";

export default function BarChart2() {
  const [Barchart, setBarchart] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8070/student/test`)
      .then((res) => {
        console.log(res.data);
        setBarchart(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={Barchart}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="Pending"
          stackId="1"
          stroke="#ff5864"
          fill="#ff5864"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
