export default function StudentList({ list, handleDelete, handleEdit }) {
  return (
    <div className="bg-white dark:bg-[#111] rounded-2xl border border-gray-100 dark:border-[#222] shadow-sm overflow-hidden transition-colors">
      {list.length === 0 ? (
        <div className="py-20 flex flex-col items-center justify-center text-center px-4 border border-dashed border-gray-200 dark:border-[#333] rounded-2xl m-2">
          <div className="w-16 h-16 bg-gray-50 dark:bg-[#1a1a1a] rounded-2xl flex items-center justify-center mb-4">
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
              className="lucide lucide-inbox w-8 h-8 text-gray-400 dark:text-gray-500"
              aria-hidden="true"
            >
              <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
              <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
            </svg>
          </div>
          <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1">
            Không tìm thấy học sinh
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 max-w-sm">
            Chưa có dữ liệu hoặc không có kết quả phù hợp với tìm kiếm của bạn.
          </p>
        </div>
      ) : (
        list.map((student) => (
          <div
            key={student.id}
            className="group flex flex-col sm:flex-row sm:items-center justify-between p-5 hover:bg-gray-50 dark:hover:bg-[#161616] transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 shrink-0 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#222] dark:to-[#333] flex items-center justify-center text-sm font-semibold text-gray-600 dark:text-gray-300">
                {student.name.charAt(0).toUpperCase()}
              </div>
              <div>
                <div className="flex items-center gap-2.5 mb-1">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                    {student.name}
                  </h3>
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-medium tracking-wide uppercase ${student.gender === "Male" ? "bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400" : student.gender === "Female" ? "bg-pink-50 text-pink-600 dark:bg-pink-500/10 dark:text-pink-400" : "bg-gray-100 text-gray-600 dark:bg-gray-500/10 dark:text-gray-400"}`}
                  >
                    {student.gender === "Male"
                      ? "Nam"
                      : student.gender === "Female"
                        ? "Nữ"
                        : "Khác"}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-500 dark:text-gray-400">
                  <span className="flex items-center gap-1.5">
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
                      className="lucide lucide-calendar w-3.5 h-3.5"
                      aria-hidden="true"
                    >
                      <path d="M8 2v4"></path>
                      <path d="M16 2v4"></path>
                      <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                      <path d="M3 10h18"></path>
                    </svg>
                    {student.date}
                  </span>
                  <span className="flex items-center gap-1.5">
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
                      className="lucide lucide-map-pin w-3.5 h-3.5"
                      aria-hidden="true"
                    >
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    {student.address}
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-4 sm:mt-0 flex items-center gap-2 sm:opacity-0 group-hover:opacity-100 transition-opacity pl-16 sm:pl-0">
              <button
                onClick={() => handleEdit(student.id)}
                className="px-3 py-1.5 text-xs font-medium text-gray-600 dark:text-gray-300 bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#333] rounded-lg hover:bg-gray-50 dark:hover:bg-[#222] transition-colors flex items-center gap-1.5"
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
                  className="lucide lucide-pen w-3.5 h-3.5"
                  aria-hidden="true"
                >
                  <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                </svg>
                Sửa
              </button>
              <button
                onClick={() => handleDelete(student.id)}
                className="px-3 py-1.5 text-xs font-medium text-red-600 dark:text-red-400 bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#333] rounded-lg hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors flex items-center gap-1.5"
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
                  className="lucide lucide-trash-2 w-3.5 h-3.5"
                  aria-hidden="true"
                >
                  <path d="M10 11v6"></path>
                  <path d="M14 11v6"></path>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                  <path d="M3 6h18"></path>
                  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                </svg>
                Xóa
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
