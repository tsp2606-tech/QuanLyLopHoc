import React from "react";
import { User, Phone } from "lucide-react";

const AddContactSection = ({
  isDarkMode,
  name,
  phone,
  setName,
  setPhone,
  handleSubmit,
  handleSaveEdit,
  editingTaskId,
  editContact,
  cancelEdit,
}) => {
  return (
    <div
      className={`rounded-[32px] border p-6 transition-all duration-300 ${
        isDarkMode
          ? "bg-[#101828] border-gray-800"
          : "bg-[#FFFFFF] border-gray-200"
      }`}
    >
      <div className="mb-6">
        <h2
          className={`text-xl font-semibold transition-colors duration-300 ${
            isDarkMode ? "text-[#FFFFFF]" : "text-[#101828]"
          }`}
        >
          {editingTaskId ? "Cập nhật liên hệ" : "Thêm liên hệ"}
        </h2>
      </div>

      <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-600 dark:text-slate-400 transition-colors duration-300">
            Tên
          </label>
          <div
            className={`flex items-center gap-3 rounded-3xl border px-4 py-3 transition-all duration-300 ${
              isDarkMode
                ? "border-gray-800 bg-slate-950 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-900/30"
                : "border-slate-200 bg-slate-50 focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-100"
            }`}
          >
            <User className="h-5 w-5 text-slate-400 dark:text-slate-500" />
            <input
              type="text"
              placeholder="Nhập tên..."
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`w-full bg-transparent transition-colors duration-300 ${isDarkMode ? "text-white dark:placeholder:text-slate-600" : "text-slate-900 outline-none placeholder:text-slate-400"}`}
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-600 dark:text-slate-400 transition-colors duration-300">
            Số điện thoại
          </label>
          <div
            className={`flex items-center gap-3 rounded-3xl border px-4 py-3 transition-all duration-300 ${
              isDarkMode
                ? "border-gray-800 bg-slate-950 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-900/30"
                : "border-slate-200 bg-slate-50 focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-100"
            }`}
          >
            <Phone className="h-5 w-5 text-slate-400 dark:text-slate-500" />
            <input
              type="tel"
              placeholder="Nhập số điện thoại..."
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={`w-full bg-transparent transition-colors duration-300 ${isDarkMode ? "text-white dark:placeholder:text-slate-600" : "text-slate-900 outline-none placeholder:text-slate-400"}`}
            />
          </div>
        </div>

        <div className="flex gap-3">
          <button
            type="submit"
            onClick={handleSubmit}
            className="inline-flex w-full items-center justify-center rounded-3xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 cursor-pointer"
          >
            {editingTaskId ? "Lưu thay đổi" : "+ Thêm vào danh bạ"}
          </button>
          {editingTaskId && (
            //nút hủy khi đang chỉnh sửa
            <button
              type="button"
              onClick={cancelEdit}
              className="inline-flex w-full items-center justify-center rounded-3xl bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700 cursor-pointer"
            >
              Hủy
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddContactSection;
