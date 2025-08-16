import React, { useMemo } from 'react';
import { DollarSign, ShoppingBag, Users } from "lucide-react";
import useAxiosSecure from '../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const DashboardLayout = () => {
  const axiosSecure = useAxiosSecure();
  const today = new Date();
  const options = { day: "2-digit", month: "short", year: "numeric" };
  const formattedDate = today.toLocaleDateString("en-GB", options);
  const category = ["Food", "Transport", "Shopping", "Others"];

  const { data: allExpense = [] } = useQuery({
    queryKey: ["ExpenseList"],
    queryFn: async () => {
      const res = await axiosSecure.get('/expenses');
      return res.data;
    }
  });

  const { data: total } = useQuery({
    queryKey: ["TotalExpense"],
    queryFn: async () => {
      const res = await axiosSecure.get("/expenses/total");
      return res.data;
    }
  });

  const { data: totalUser } = useQuery({
    queryKey: ["TotalUser"],
    queryFn: async () => {
      const res = await axiosSecure.get("/user/total");
      return res.data;
    }
  });

  // Grouping expenses by category
  const chartData = useMemo(() => {
    const grouped = {};
    allExpense.forEach(exp => {
      grouped[exp.category] = (grouped[exp.category] || 0) + exp.amount;
    });
    return Object.keys(grouped).map(key => ({
      name: key,
      value: grouped[key]
    }));
  }, [allExpense]);

  const COLORS = ["#4285F4", "#34A853", "#A142F4", "#FBBC05", "#FF5722"];

  return (
    <div className="p-8 space-y-8 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between bg-white shadow-md p-6 rounded-xl">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">
            Welcome back! Here's your expense overview
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500">Today</p>
          <p className="text-lg font-semibold text-gray-900">{formattedDate}</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Expenses Card */}
        <div className="p-5 rounded-xl shadow-md bg-white border border-gray-200 flex justify-between hover:scale-105 duration-300 hover:shadow-lg">
          <div className="">
            <h2 className="text-sm font-medium text-gray-500">Total Expenses</h2>
            <p className="text-2xl font-bold text-gray-900 mt-3">${total?.totalAmount}</p>
          </div>
          <div>
            <div className="bg-gradient-to-br from-blue-400 to-blue-700 p-5 rounded-2xl shadow-xl">
              <DollarSign size={26} className="text-white font-extrabold" />
            </div>
          </div>
        </div>
        <div className="p-5 rounded-xl shadow-md bg-white border border-gray-200 flex justify-between hover:scale-105 duration-300 hover:shadow-lg">
          <div className="">
            <h2 className="text-sm font-medium text-gray-500">Categories</h2>
            <p className="text-2xl font-bold text-gray-900 mt-3">{category?.length}</p>
          </div>
          <div>
            <div className="bg-gradient-to-br from-orange-400 to-orange-700 p-5 rounded-2xl shadow-xl">
              <ShoppingBag size={26} className="text-white font-extrabold" />
            </div>
          </div>
        </div>
        <div className="p-5 rounded-xl shadow-md bg-white border border-gray-200 flex justify-between hover:scale-105 duration-300 hover:shadow-lg">
          <div className="">
            <h2 className="text-sm font-medium text-gray-500">Total User</h2>
            <p className="text-2xl font-bold text-gray-900 mt-3">{totalUser?.length}</p>
          </div>
          <div>
            <div className="bg-gradient-to-br from-green-400 to-green-700 p-5 rounded-2xl shadow-xl">
              <Users size={26} className="text-white font-extrabold" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl w-[40%] shadow-md p-8  flex items-center justify-center ">
        {chartData.length > 0 ? (
          <PieChart width={350} height={250}>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              outerRadius={100}
              label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
              dataKey="value"
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        ) : (
          <p className="text-gray-500">No expense data available</p>
        )}
      </div>
    </div>
  );
};

export default DashboardLayout;
