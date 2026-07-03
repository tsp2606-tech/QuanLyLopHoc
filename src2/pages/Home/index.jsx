import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import AddContactSection from "@/components/AddContactSection";
import ContactListSection from "@/components/ContactListSection";

export const Home = () => {
  //dark mode mac dinh lay tu localstorage
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "true",
  );
  const [editingContactId, setEditingContactId] = React.useState(null);
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  //tao ham edit lien he
  const editContact = (editingTaskId, name, phone) => {
    debugger;
    const updatedTasks = listTask.map((task) =>
      task.id === editingTaskId ? { ...task, name: name, phone: phone } : task,
    );
    setListTask(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };
  //ham huy edit
  const cancelEdit = () => {
    setEditingContactId(null);
    setName("");
    setPhone("");
  };
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);
  //lay darkmode tu localstorage
  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    if (savedDarkMode) {
      setIsDarkMode(JSON.parse(savedDarkMode));
    }
  }, []);
  //quản lý danh sách task
  const [listTask, setListTask] = React.useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const addTask = (name, phone) => {
    //so dien thoai khong duoc nhap chu
    const regex = /^\d+$/;
    if (!regex.test(phone)) {
      alert("So dien thoai khong duoc nhap chu");
      return;
    }
    const newTask = {
      id: Date.now(),
      name: name,
      phone: phone,
    };

    const updatedTasks = [...listTask, newTask];
    setListTask(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const handleSubmit = (e) => {
    debugger;
    e.preventDefault();
    if (name.trim() !== "" && phone.trim() !== "") {
      if (editingTaskId) {
        editContact(editingTaskId, name.trim(), phone.trim());
        setEditingContactId(null);
        setName("");
        setPhone("");
      } else {
        addTask(name.trim(), phone.trim());

        setName("");
        setPhone("");
      }
    }
  };
  //xoa task
  const deleteTask = (taskId) => {
    const updatedTasks = listTask.filter((task) => task.id !== taskId);
    setListTask(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };
  //logic task
  const toggleTaskCompletion = (taskId) => {
    const updatedTasks = listTask.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task,
    );
    setListTask(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };
  //edit task
  const [editingTaskId, setEditingTaskId] = React.useState(null);
  const [editingText, setEditingText] = React.useState("");
  //bat dau chinh
  const handleEditTask = (taskId, currentText) => {
    setEditingTaskId(taskId);
    setEditingText(currentText);
  };
  //luu chinh sua
  const handleSaveEdit = (taskId) => {
    const trimmedText = editingText.trim();

    if (trimmedText) {
      updateTaskText(taskId, trimmedText);
    }

    setEditingTaskId(null);
    setEditingText("");
  };
  //update edit
  const updateTaskText = (taskId, newText) => {
    const updatedTasks = listTask.map((task) =>
      task.id === taskId ? { ...task, text: newText } : task,
    );
    setListTask(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };
  //end logic task

  //ham fill data form contact
  const fillDataFormContact = (contact) => {
    setName(contact.name);
    setPhone(contact.phone);
    setEditingTaskId(contact.id);
  };
  return (
    <div
      className={`min-h-screen py-10 transition-colors duration-300 ${isDarkMode ? "bg-[#030712]" : "bg-slate-50"}`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />

        <div className="grid gap-6 lg:grid-cols-[320px_minmax(0,1fr)]">
          <AddContactSection
            isDarkMode={isDarkMode}
            name={name}
            phone={phone}
            setName={setName}
            setPhone={setPhone}
            handleSubmit={handleSubmit}
            handleSaveEdit={handleSaveEdit}
            editingTaskId={editingTaskId}
            editContact={editContact}
            cancelEdit={cancelEdit}
          />
          <ContactListSection
            isDarkMode={isDarkMode}
            listTask={listTask}
            deleteTask={deleteTask}
            handleEditTask={handleEditTask}
            setEditingText={setEditingText}
            editingTaskId={editingTaskId}
            editingText={editingText}
            fillDataFormContact={fillDataFormContact}
          />
        </div>
      </div>
    </div>
  );
};
