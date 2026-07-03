import { useState, useEffect } from "react";
import Header from "../../components/Header";
import StudentForm from "../../components/StudentForm";
import StudentList from "../../components/StudentList";

export default function Home() {
  //darkmode
  const [isDark, setIsDark] = useState(
    () => localStorage.getItem("theme") === "dark",
  );

  const toggleDark = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);
  //khai bao student
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");

  //tạo hàm nút bấm để thêm lớp học
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  //tạo hàm load dữ liệu từ localstorage
  const [students, setStudents] = useState([]);
  useEffect(() => {
    const students = JSON.parse(localStorage.getItem("students")) || [];
    setStudents(students);
  }, []);

  //tạo hàm lưu input vào localstogare
  const [student, setStudent] = useState({
    name: "",
    date: "",
    gender: "",
    address: "",
  });

  //hàm submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!student.date || !student.name || !student.address) {
      alert("Vui lòng điền đầy đủ thông tin");
      return;
    }

    setStudents((prev) => {
      const newStudents = [
        ...prev,
        {
          ...student,
          id: Date.now(),
          gender: student.gender || "Male",
        },
      ];
      localStorage.setItem("students", JSON.stringify(newStudents));
      return newStudents;
    });

    setStudent({
      name: "",
      date: "",
      gender: "",
      address: "",
    });
  };

  //hàm quản lý học sinh
  const totalStudents = students.length;
  const maleStudents = students.filter(
    (student) => student.gender === "Male",
  ).length;
  const femaleStudents = students.filter(
    (student) => student.gender === "Female",
  ).length;

  //hàm điền dữ liệu học sinh vào list
  const studentList = students;

  //hàm xóa học sinh khi bấm nút xóa và cập nhật lại tổng số học sinh
  const handleDelete = (id) => {
    setStudents((prev) => {
      const newStudents = prev.filter((student) => student.id !== id);
      localStorage.setItem("students", JSON.stringify(newStudents));
      return newStudents;
    });
  };
  const [editingId, setEditingId] = useState(null);
  const isEditing = editingId !== null;

  //hàm chỉnh sửa thông tin học sinh
  const handleEdit = (id) => {
    const studentToEdit = students.find((s) => s.id === id);
    if (studentToEdit) {
      setStudent(studentToEdit);
      setEditingId(id);
    }
  };

  //hàm hủy chỉnh sửa
  const handleCancel = () => {
    setStudent({ name: "", date: "", gender: "Male", address: "" });
    setEditingId(null);
  };

  //hàm lưu chỉnh sửa
  const handleSave = (e) => {
    e.preventDefault();
    if (!student.date || !student.name || !student.address) {
      alert("Vui lòng điền đầy đủ thông tin");
      return;
    }

    setStudents((prev) => {
      const newStudents = prev.map((s) =>
        s.id === editingId ? { ...student, id: editingId } : s,
      );
      localStorage.setItem("students", JSON.stringify(newStudents));
      return newStudents;
    });

    setStudent({ name: "", date: "", gender: "Male", address: "" });
    setEditingId(null);
  };

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="min-h-screen bg-[#fafafa] dark:bg-[#0a0a0a] transition-colors duration-300 font-sans selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
        <Header isDark={isDark} toggleDark={toggleDark} />

        <main className="max-w-6xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            <div className="bg-white dark:bg-[#111] p-5 rounded-2xl border border-gray-100 dark:border-[#222] shadow-sm flex items-center gap-4 transition-colors">
              <div className="p-3 bg-gray-50 dark:bg-[#1a1a1a] rounded-xl text-gray-900 dark:text-white">
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
                  className="lucide lucide-users w-5 h-5"
                  aria-hidden="true"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Tổng số
                </p>
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {totalStudents}
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-[#111] p-5 rounded-2xl border border-gray-100 dark:border-[#222] shadow-sm flex items-center gap-4 transition-colors">
              <div className="p-3 bg-blue-50 dark:bg-blue-500/10 rounded-xl text-blue-600 dark:text-blue-400">
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
                  className="lucide lucide-user w-5 h-5"
                  aria-hidden="true"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Nam
                </p>
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {maleStudents}
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-[#111] p-5 rounded-2xl border border-gray-100 dark:border-[#222] shadow-sm flex items-center gap-4 transition-colors">
              <div className="p-3 bg-pink-50 dark:bg-pink-500/10 rounded-xl text-pink-600 dark:text-pink-400">
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
                  className="lucide lucide-user-check w-5 h-5"
                  aria-hidden="true"
                >
                  <path d="m16 11 2 2 4-4"></path>
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Nữ
                </p>
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {femaleStudents}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div className="relative flex-1 w-full">
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
                className="lucide lucide-search absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                aria-hidden="true"
              >
                <path d="m21 21-4.34-4.34"></path>
                <circle cx="11" cy="11" r="8"></circle>
              </svg>
              <input
                placeholder="Tìm kiếm theo tên hoặc địa chỉ..."
                className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-[#111] border border-gray-200 dark:border-[#222] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all text-gray-900 dark:text-white placeholder-gray-400 shadow-sm"
                type="text"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
            <div className="lg:col-span-4">
              <StudentForm
                student={student}
                setStudent={setStudent}
                handleSubmit={handleSubmit}
                handleEdit={handleEdit}
                handleCancel={handleCancel}
                handleSave={handleSave}
                isEditing={isEditing}
              />
            </div>
            <div className="lg:col-span-8">
              <StudentList
                list={studentList}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                handleCancel={handleCancel}
                handleSave={handleSave}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
