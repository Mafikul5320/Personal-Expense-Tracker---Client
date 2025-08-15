import React from "react";
import { useForm } from "react-hook-form";
import { CircleX, Plus, Save, X } from "lucide-react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const EXPENSE_CATEGORIES = ["Food", "Transport", "Shopping", "Others"];

const AddExpenseForm = () => {
    const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async(formData) => {
    console.log(formData);
    const {title,amount,date,category}=formData;
    const data ={
        title,
        amount,
        date,
        category,
    }
    const res = await axiosSecure.post("/expense",data);
    if(res.data.insertedId){
         Swal.fire({
        icon: "success",
        title: "Data Add sucessfull",
        showConfirmButton: false,
        timer: 1500
      });
    }
    reset();
  };

  return (
    <div className="p-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {/* Header */}
          <div className="flex items-center space-x-3 mb-8">
            <div className="bg-gradient-to-r from-blue-500 to-teal-600 text-white p-3 rounded-lg">
              <Plus className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Add New Expense
              </h1>
              <p className="text-gray-600">
                Track your spending with detailed information
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Expense Title
              </label>
              <input
                type="text"
                {...register("title", {
                  required: "Please enter an expense title!",
                  minLength: {
                    value: 3,
                    message: "Title must be at least 3 characters!",
                  },
                })}
                className={`w-full px-4 py-3 border rounded-lg ${
                  errors.title ? "border-red-300 bg-red-50" : "border-gray-300"
                }`}
                placeholder="e.g., Grocery shopping, Gas station"
              />
              {errors.title && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <CircleX size={13} />
                  <span className="pl-1">{errors.title.message}</span>
                </p>
              )}
            </div>

            {/* Amount */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Amount ($)
              </label>
              <input
                type="number"
                step="0.01"
                min="0"
                {...register("amount", {
                  required: "Please enter the expense amount!",
                  min: {
                    value: 0.01,
                    message: "Amount must be greater than 0",
                  },
                })}
                className={`w-full px-4 py-3 border rounded-lg ${
                  errors.amount
                    ? "border-red-300 bg-red-50"
                    : "border-gray-300"
                }`}
                placeholder="0.00"
              />
              {errors.amount && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <CircleX size={13} />
                  <span className="pl-1">{errors.amount.message}</span>
                </p>
              )}
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                {...register("category", {
                  required: "Please select a category!",
                })}
                className={`w-full px-4 py-3 border rounded-lg ${
                  errors.category
                    ? "border-red-300 bg-red-50"
                    : "border-gray-300"
                }`}
              >
                <option value="">Select a category</option>
                {EXPENSE_CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
              {errors.category && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <CircleX size={13} />
                  <span className="pl-1">{errors.category.message}</span>
                </p>
              )}
            </div>

            {/* Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date
              </label>
              <input
                type="date"
                {...register("date", {
                  required: "Please select a valid date!",
                })}
                className={`w-full px-4 py-3 border rounded-lg ${
                  errors.date ? "border-red-300 bg-red-50" : "border-gray-300"
                }`}
              />
              {errors.date && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <CircleX size={13} />
                  <span className="pl-1">{errors.date.message}</span>
                </p>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4 pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-gradient-to-r from-blue-500 to-teal-600 text-white py-3 px-6 rounded-lg font-medium hover:from-teal-700 hover:to-blue-600 flex items-center justify-center space-x-2"
              >
                
                <Save className="h-5 w-5" />
                <span>{isSubmitting ? "Adding..." : "Add Expense"}</span>
              </button>
              <button
                type="button"
                onClick={() => reset()}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <X className="h-5 w-5" />
                <span>Reset</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddExpenseForm;
