import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
  PieChart,
  Pie,
  Cell
} from 'recharts';

function Analytics() {
  // Sample data for the line chart (monthly clicks)
  const lineData = [
    { name: 'Jan', clicks: 800 },
    { name: 'Feb', clicks: 1500 },
    { name: 'Mar', clicks: 1000 },
    { name: 'Apr', clicks: 2000 },
    { name: 'May', clicks: 1700 },
    { name: 'Jun', clicks: 2300 },
    { name: 'Jul', clicks: 3000 },
  ];

  // Sample data for the bar chart (traffic by links or devices)
  const barData = [
    { name: 'Link 1', value: 1200 },
    { name: 'Link 2', value: 800 },
    { name: 'Link 3', value: 600 },
    { name: 'Link 4', value: 900 },
  ];

  // Sample data for the pie chart (sites or social sources)
  const pieData = [
    { name: 'YouTube', value: 520 },
    { name: 'Facebook', value: 320 },
    { name: 'Instagram', value: 190 },
    { name: 'Other', value: 80 },
  ];
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  
    // New bar chart data for "Traffic by Links" (6 links)
    const extendedLinksData = [
      { name: 'Link 1', value: 3000 },
      { name: 'Link 2', value: 2500 },
      { name: 'Link 3', value: 1500 },
      { name: 'Link 4', value: 3000 },
      { name: 'Link 5', value: 1200 },
      { name: 'Link 6', value: 2200 },
    ];
    // Some shades of green for each bar
    const linkColors = ['#B5F1B6', '#8BE596', '#49C267', '#29A264', '#7FEBA3', '#3FA25D'];

  return (
    <div className='w-full flex pl-10 pr-10 h-full'>
      <div className='flex flex-col w-full h-screen p-10 pt-0'>
        
        {/* Overview Header */}
        <div className='flex justify-between'>
          <label className='font-semibold text-lg'>Overview</label>
          <div className='p-3 bg-gray-200 text-sm rounded-lg'>
            <span>Feb 9th to Feb 23rd</span>
          </div>
        </div>

        {/* Top Stats Cards */}
        <div className='flex mt-4 w-full space-x-12'>
          <div className='bg-[#22D679] h-[14vh] w-full rounded-2xl p-6 flex flex-col space-y-3'>
            <span className='text-white text-lg'>Clicks on Links</span>
            <span className='text-white font-semibold text-3xl'>2,318</span>
          </div>
          <div className='bg-green-200 h-[14vh] w-full rounded-2xl p-6 flex flex-col space-y-3'>
            <span className='text-black text-lg'>Click on Shop</span>
            <span className='text-black font-semibold text-3xl'>7,265</span>
          </div>
          <div className='bg-green-200 h-[14vh] w-full rounded-2xl p-6 flex flex-col space-y-3'>
            <span className='text-black text-lg'>CTA</span>
            <span className='text-black font-semibold text-3xl'>156</span>
          </div>
        </div>

        {/* Line Chart */}
<div className='w-full h-screen overflow-y-auto mt-8 hide-scrollbar'>
<div className='bg-gray-200 rounded-2xl h-[36vh] w-full  p-4'>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={lineData} margin={{ top: 20, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="clicks" 
                stroke="#22D679" 
                strokeWidth={3} 
                dot={{ r: 3 }} 
                activeDot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Bottom Charts Row */}
        <div className='flex h-[60vh] mt-12 justify-between space-x-16 w-full mb-16'>
          
          {/* Left Chart: Bar */}
          <div className='bg-gray-200 rounded-2xl h-full w-1/2 p-4 flex flex-col'>
            <h2 className='font-semibold mb-2'>Traffic by Links</h2>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#22D679" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Right Chart: Pie */}
          <div className='bg-gray-200 rounded-2xl h-full w-1/2 p-4 flex flex-col'>
            <h2 className='font-semibold mb-2'>Sites</h2>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={90}
                  fill="#8884d8"
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

        </div>
        {/* New Bar Chart Section: "Traffic by Links" */}
<div className='bg-white rounded-2xl w-full p-4 h-[44vh] mb-50'>
          <h2 className='font-semibold mb-2'>Traffic by Links</h2>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={extendedLinksData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" radius={[10, 10, 0, 0]}>
                {extendedLinksData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={linkColors[index % linkColors.length]}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
</div>

      </div>
    </div>
  );
}

export default Analytics;
