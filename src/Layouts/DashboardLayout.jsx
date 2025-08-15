import React from 'react';
import { DollarSign, ArrowDownRight, TrendingUp, ShoppingBag } from "lucide-react";
const DashboardLayout = () => {
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
          <p className="text-lg font-semibold text-gray-900">14 Aug 2025</p>
        </div>
      </div>

      {/* Stats Cards */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Total Expenses Card */}
      <div className="p-5 rounded-xl shadow-md bg-white border border-gray-200 flex justify-between hover:scale-105 duration-300 hover:shadow-lg">
        <div className="">
          <h2 className="text-sm font-medium text-gray-500">Total Expenses</h2>
          <p className="text-2xl font-bold text-gray-900 mt-3">$0.00</p>
        <p className="text-xs text-gray-400 mt-1">0 transactions</p>
        </div>
       <div>
      <div className="bg-gradient-to-br from-blue-400 to-blue-700 p-5 rounded-2xl shadow-xl">
            <DollarSign size={26} className="text-white font-extrabold" />
          </div>
       </div>
      </div>
      <div className="p-5 rounded-xl shadow-md bg-white border border-gray-200 flex justify-between hover:scale-105 duration-300 hover:shadow-lg">
        <div className="">
          <h2 className="text-sm font-medium text-gray-500">This Month</h2>
          <p className="text-2xl font-bold text-gray-900 mt-3">$0.00</p>
        <p className="text-xs text-gray-400 mt-1">0 transactions</p>
        </div>
       <div>
      <div className="bg-gradient-to-br from-purple-400 to-purple-700 p-5 rounded-2xl shadow-xl">
            <ArrowDownRight size={26} className="text-white font-extrabold" />
          </div>
       </div>
      </div>
      <div className="p-5 rounded-xl shadow-md bg-white border border-gray-200 flex justify-between hover:scale-105 duration-300 hover:shadow-lg">
        <div className="">
          <h2 className="text-sm font-medium text-gray-500">Average Expense</h2>
          <p className="text-2xl font-bold text-gray-900 mt-3">$0.00</p>
        <p className="text-xs text-gray-400 mt-1">0 transactions</p>
        </div>
       <div>
      <div className="bg-gradient-to-br from-green-400 to-green-700 p-5 rounded-2xl shadow-xl">
            <TrendingUp size={26} className="text-white font-extrabold" />
          </div>
       </div>
      </div>
      <div className="p-5 rounded-xl shadow-md bg-white border border-gray-200 flex justify-between hover:scale-105 duration-300 hover:shadow-lg">
        <div className="">
          <h2 className="text-sm font-medium text-gray-500">Categories</h2>
          <p className="text-2xl font-bold text-gray-900 mt-3">$0.00</p>
        <p className="text-xs text-gray-400 mt-1">0 transactions</p>
        </div>
       <div>
      <div className="bg-gradient-to-br from-orange-400 to-orange-700 p-5 rounded-2xl shadow-xl">
            <ShoppingBag size={26} className="text-white font-extrabold" />
          </div>
       </div>
      </div>

    </div>

      {/* Chart Placeholder + Recent Expenses */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-md p-6 h-64 flex items-center justify-center">
            <p className="text-gray-500">[ Chart Placeholder ]</p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Expenses</h3>
          <ul className="space-y-3">
            <li className="flex justify-between text-gray-700">
              <span>Food</span>
              <span>$45.00</span>
            </li>
            <li className="flex justify-between text-gray-700">
              <span>Transport</span>
              <span>$12.00</span>
            </li>
            <li className="flex justify-between text-gray-700">
              <span>Shopping</span>
              <span>$75.00</span>
            </li>
            <li className="flex justify-between text-gray-700">
              <span>Bills</span>
              <span>$30.00</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    );
};

export default DashboardLayout;