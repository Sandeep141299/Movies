import React from "react";
import "./Css/Dashboard.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const Dashboard = () => {
  const data = [
    { name: "Jan", Movie_Downloads: 4000, Movie_Streaming: 2400, amt: 2400 },
    { name: "Feb", Movie_Downloads: 3000, Movie_Streaming: 1398, amt: 2210 },
    { name: "Mar", Movie_Downloads: 2000, Movie_Streaming: 9800, amt: 2290 },
    { name: "Apr", Movie_Downloads: 2780, Movie_Streaming: 3908, amt: 2000 },
    { name: "May", Movie_Downloads: 1890, Movie_Streaming: 4800, amt: 2181 },
    { name: "Jun", Movie_Downloads: 2390, Movie_Streaming: 3800, amt: 2500 },
    { name: "Jul", Movie_Downloads: 3490, Movie_Streaming: 4300, amt: 2100 },
    { name: "Aug", Movie_Downloads: 2000, Movie_Streaming: 9800, amt: 2290 },
    { name: "Sep", Movie_Downloads: 2780, Movie_Streaming: 3908, amt: 2000 },
    { name: "Oct", Movie_Downloads: 1890, Movie_Streaming: 4800, amt: 2181 },
    { name: "Nov", Movie_Downloads: 2390, Movie_Streaming: 3800, amt: 2500 },
    { name: "Dec", Movie_Downloads: 3490, Movie_Streaming: 4300, amt: 2100 },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  const data1 = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];

  return (
    <div>
      <h2 id='h1'>Dashboard</h2>
      <div id='dashboard'>
        <div class='row'>
          <div class='col-sm'>
            {" "}
            <LineChart width={700} height={400} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <XAxis dataKey='name' />
              <YAxis />
              <CartesianGrid strokeDasharray='3 3' />
              <Tooltip />
              <Legend />
              <Line type='monotone' dataKey='Movie_Streaming' stroke='#8884d8' activeDot={{ r: 8 }} />
              <Line type='monotone' dataKey='Movie_Downloads' stroke='#82ca9d' />
            </LineChart>
          </div>

          <div class='col-sm' id='line-chart'>
            <h3>LineChart</h3>
            <p>The LineChart is a type of chart that displays information as a series of data points connected by straight lines. In this data set, there are 12 data points representing the months of the year.</p>
            <p>For each data point, there are three properties: name: the name of the month Movie_Downloads: the number of movie downloads for that month Movie_Streaming: the number of movie streaming views for that month amt: a general amount that can be used for additional data or as a value for tooltips The LineChart component can take in this data and display it as a line graph with the x-axis representing the months and the y-axis representing the number of downloads and streaming views. This can be useful for visualizing trends and comparing data over time.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
