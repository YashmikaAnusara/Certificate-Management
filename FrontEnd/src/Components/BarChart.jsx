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
import Port from "../port";
import axios from "axios";

export default function BarChart() {
  const [Barchart, setBarchart] = useState([]);

  useEffect(() => {
    axios
      .get(`http://${Port}:8070/student/pending`)
      .then((res) => {
        // console.log(res.data);
        setBarchart(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={400}
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
          dataKey="Pending Requset"
          stroke="#f4bc44"
          fill="#f4bc44"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
