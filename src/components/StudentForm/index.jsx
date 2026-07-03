export default function StudentForm({
  student,
  setStudent,
  handleSubmit,
  handleEdit,
  handleCancel,
  handleSave,
  isEditing,
}) {
  return (
    <div className="bg-white dark:bg-[#111] border border-gray-200 dark:border-[#222] rounded-2xl p-6 shadow-sm relative">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
        {isEditing ? "Chỉnh sửa thông tin học sinh" : "Hồ sơ học sinh mới"}
      </h2>
      <form className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Họ và tên
            </label>
            <input
              required
              className="w-full px-3.5 py-2.5 bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#333] rounded-xl text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all"
              placeholder="Nguyễn Văn A"
              type="text"
              value={student.name}
              onChange={(e) => setStudent({ ...student, name: e.target.value })}
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Ngày sinh
            </label>
            <input
              required
              className="w-full px-3.5 py-2.5 bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#333] rounded-xl text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all"
              type="date"
              value={student.date}
              onChange={(e) => setStudent({ ...student, date: e.target.value })}
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Giới tính
            </label>
            <select
              className="w-full px-3.5 py-2.5 bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#333] rounded-xl text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all appearance-none"
              value={student.gender}
              onChange={(e) =>
                setStudent({ ...student, gender: e.target.value })
              }
            >
              <option value="Male">Nam</option>
              <option value="Female">Nữ</option>
              <option value="Other">Khác</option>
            </select>
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Địa chỉ
            </label>
            <input
              required
              className="w-full px-3.5 py-2.5 bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#333] rounded-xl text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all"
              placeholder="123 Đường Lê Lợi, Quận 1..."
              type="text"
              value={student.address}
              onChange={(e) =>
                setStudent({ ...student, address: e.target.value })
              }
            />
          </div>
        </div>
        <div className="flex items-center justify-end gap-3 pt-2">
          {isEditing ? (
            <button
              type="button"
              onClick={handleCancel}
              className="px-4 py-2.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Hủy bỏ
            </button>
          ) : null}
          <button
            type="submit"
            onClick={isEditing ? handleSave : handleSubmit}
            className="px-6 py-2.5 text-sm font-medium text-white dark:text-black bg-black dark:bg-white rounded-xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors shadow-sm"
          >
            {isEditing ? "Lưu" : "Tạo hồ sơ"}
          </button>
        </div>
      </form>
    </div>
  );
}
