import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { DollarSign, Search, Filter, Calendar, Edit, Trash2 } from 'lucide-react';
import { Save } from "lucide-react";
import useAxiosSecure from '../Hooks/useAxiosSecure';
import { useState } from 'react';
import Swal from 'sweetalert2';
import Loading from '../Components/Loading';


const ExpenseList = () => {
  const EXPENSE_CATEGORIES = ["Food", "Transport", "Shopping", "Others"];
  const categories = ['Food', 'Transport', 'Shopping', 'Bills'];
  const axiosSecure = useAxiosSecure();
  const [expenseId, setExpenseId] = useState()
  const [updateData, setupdateData] = useState()
  const queryClient = useQueryClient();

  const HandelEdit = async (id) => {
    console.log(id)
    setExpenseId(id)
    document.getElementById('my_modal_2').showModal();
    const res = await axiosSecure.get(`/expenses?id=${id}`)
    setupdateData(res?.data)

  }

  const { data: allExpense, isLoading } = useQuery({
    queryKey: ["ExpenseList"],
    queryFn: async () => {
      const res = await axiosSecure.get('/expenses');
      return res.data;
    }
  })

  const updateExpenseMutation = useMutation({
    mutationFn: async ({ id, updateData }) => {
      console.log(updateData)
      const res = await axiosSecure.put(`/update/${id}`, updateData);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['ExpenseList'] });
      document.getElementById('my_modal_2').close();
      Swal.fire({
        icon: "success",
        title: "Update Sucessfull",
        showConfirmButton: false,
        timer: 1500
      });
    },
  });
  const deleteExpenseMutation = useMutation({
    mutationFn: async (id) => {
      const res = await axiosSecure.delete(`/delete/${id}`);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["ExpenseList"] });
    },
    onError: (err) => {
      console.error("Delete failed", err);
    },
  });

  if (isLoading) {
    return <Loading></Loading>
  }
  const handelDeleted = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        deleteExpenseMutation.mutate(id, {
          onSuccess: () => {
            Swal.fire(
              "Deleted!",
              "Your expense has been deleted.",
              "success"
            );
          },
          onError: () => {
            Swal.fire(
              "Error!",
              "Something went wrong while deleting.",
              "error"
            );
          }
        });
      }
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const fromData = new FormData(form);
    const { title, amount, date, category } = Object.fromEntries(fromData.entries());

    updateExpenseMutation.mutate({
      id: expenseId,
      updateData: { title, amount, date, category },
    });
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Food': return 'bg-green-100 text-green-800 border-green-200';
      case 'Transport': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Shopping': return 'bg-pink-100 text-pink-800 border-pink-200';
      case 'Bills': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };
  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">All Expenses</h1>
          <p className="text-gray-600 mt-1">Manage and track all your expenses</p>
        </div>
        <div className="bg-gradient-to-r from-blue-500 to-teal-600 text-white px-6 py-3 rounded-lg">
          <div className="flex items-center space-x-2">
            <DollarSign className="h-5 w-5" />
            <span className="font-semibold">Total: $57.50</span>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search expenses..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Category Filter */}
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <select className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none">
              <option value="">All Categories</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {/* Date From */}
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="date"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Date To */}
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="date"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-600">Showing 2 of 2 expenses</p>
          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">Clear Filters</button>
        </div>
      </div>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h1 className="text-2xl font-bold text-gray-900 text-center mx-auto pb-5">
              Update Data
            </h1>
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Expense Title
                </label>
                <input
                  type="text"
                  // {...register("title")}
                  name='title'
                  className={`w-full px-4 py-3 border rounded-lg `}
                  placeholder="Enter Tittle"
                  defaultValue={updateData?.title}
                />
              </div>

              {/* Amount */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Amount ($)
                </label>
                <input
                  name='amount'
                  defaultValue={updateData?.amount}
                  type="number"
                  step="0.01"
                  min="0"
                  className={`w-full px-4 py-3 border rounded-lg`}
                  placeholder="0.00"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select
                  name='category'
                  // {...register("category")}
                  className={`w-full px-4 py-3 border rounded-lg`}
                >
                  <option value={updateData?.category}>{updateData?.category}</option>
                  {EXPENSE_CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date
                </label>
                <input
                  type="date"
                  name='date'
                  defaultValue={updateData?.date}
                  // {...register("date")}
                  className={`w-full px-4 py-3 border rounded-lg`}
                />
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4 pt-6">
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-blue-500 to-teal-600 text-white py-3 px-6 rounded-lg font-medium hover:from-teal-700 hover:to-blue-600 flex items-center justify-center space-x-2"
                >

                  <Save className="h-5 w-5" />
                  {/* <span>{isSubmitting ? "Updateing..." : "Update"}</span> */}
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      {/* Expenses List */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expense</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {allExpense?.map((expense) => (
                <tr key={expense._id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">{expense.title}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full border ${getCategoryColor(expense.category)}`}>
                      {expense.category}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-semibold text-gray-900">${expense?.amount}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">{new Date(expense?.date).toLocaleDateString()}</div>
                  </td>
                  <td className="px-6 py-4 text-right text-sm font-medium">
                    <div className="flex items-center justify-end space-x-2">
                      <button onClick={() => HandelEdit(expense?._id)} className="text-blue-600 hover:text-blue-900 p-2 hover:bg-blue-50 rounded-lg transition-colors" title="Edit expense">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button onClick={() => handelDeleted(expense?._id)} className="text-red-600 hover:text-red-900 p-2 hover:bg-red-50 rounded-lg transition-colors" title="Delete expense">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>

  );
};

export default ExpenseList;