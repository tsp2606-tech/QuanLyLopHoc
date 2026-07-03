import React from "react";

const ContactListSection = ({
  isDarkMode,
  listTask,
  deleteTask,
  editingTaskId,
  editingText,
  handleEditTask,
  handleSaveEdit,
  setEditingText,
  fillDataFormContact,
}) => {
  return (
    <div
      className={`rounded-[32px] border p-6 transition-all duration-300 ${isDarkMode ? "bg-[#101828] border-gray-800" : "bg-[#FFFFFF] border-gray-200"}`}
    >
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2
          className={`text-xl font-semibold transition-colors duration-300 ${isDarkMode ? "text-[#FFFFFF]" : "text-[#101828]"}`}
        >
          Danh sách liên hệ
        </h2>
        <span
          className={`inline-flex items-center rounded-full border px-4 py-1 text-sm font-semibold transition-all duration-300 ${isDarkMode ? "border-gray-800 bg-slate-950 text-slate-400" : "border-gray-200 bg-slate-100 text-slate-600"}`}
        >
          {listTask.length} người
        </span>
      </div>

      {listTask.length === 0 ? (
        <div
          className={`flex min-h-[320px] flex-col items-center justify-center rounded-[32px] border border-dashed px-8 py-16 text-center transition-all duration-300 ${isDarkMode ? "border-gray-800 bg-[#101828] text-slate-400" : "border-gray-200 bg-[#FFFFFF] text-slate-500"}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-book-user w-12 h-12 mb-4 opacity-20"
            aria-hidden="true"
          >
            <path d="M15 13a3 3 0 1 0-6 0"></path>
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"></path>
            <circle cx="12" cy="8" r="2"></circle>
          </svg>
          <p
            className={`text-lg font-semibold ${isDarkMode ? "text-white" : "text-slate-900"}`}
          >
            Chưa có liên hệ nào
          </p>
          <p
            className={`mt-2 max-w-md text-sm leading-6 ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}
          >
            Danh bạ của bạn đang trống. Hãy thêm người mới ở biểu mẫu bên cạnh.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {listTask.map((task) => (
            <div
              key={task.id}
              className={`flex flex-row items-center justify-between gap-4 border rounded-[16px] p-4 transition-all duration-300 ${isDarkMode ? "bg-slate-900/60 border-slate-800 text-slate-200" : "bg-white border-slate-100 text-slate-900 shadow-[0_4px_20px_rgba(0,0,0,0.01)]"}`}
            >
              <div className="flex items-center gap-4 flex-1">
                <div
                  className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-[15px] shrink-0 ${isDarkMode ? "bg-blue-950 text-blue-400" : "bg-blue-50 text-blue-600"}`}
                >
                  {task.name ? task.name.charAt(0).toUpperCase() : "A"}
                </div>
                <div>
                  <h4
                    className={`font-semibold text-[15px] ${isDarkMode ? "text-white" : "text-slate-800"}`}
                  >
                    {task.name}
                  </h4>
                  <div className="flex items-center gap-1.5 text-slate-400 text-[13px] mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81 .7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <span>{task.phone}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1 shrink-0 ml-4">
                <button
                  onClick={() => fillDataFormContact(task)}
                  className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="Sửa liên hệ"
                  title="Sửa liên hệ"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-pencil w-4 h-4"
                    aria-hidden="true"
                  >
                    <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                    <path d="m15 5 4 4"></path>
                  </svg>
                </button>
                <button
                  className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-red-500"
                  aria-label="Xóa liên hệ"
                  title="Xóa liên hệ"
                  onClick={() => deleteTask(task.id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-trash2 lucide-trash-2 w-5 h-5"
                    aria-hidden="true"
                  >
                    <path d="M10 11v6"></path>
                    <path d="M14 11v6"></path>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                    <path d="M3 6h18"></path>
                    <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContactListSection;
