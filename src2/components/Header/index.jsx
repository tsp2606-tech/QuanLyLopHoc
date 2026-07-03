import React from "react";
import { Sun, Moon } from "lucide-react";

const Header = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <header className="mb-8 rounded-[32px]">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-4">
          <div
            className={`flex h-14 w-14 items-center justify-center rounded-3xl transition-colors duration-300 ${
              isDarkMode
                ? "bg-blue-900 text-blue-300"
                : "bg-blue-100 text-blue-600"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="M15 13a3 3 0 1 0-6 0" />
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
              <circle cx="12" cy="8" r="2" />
            </svg>
          </div>
          <div>
            <h1
              className={`mt-1 text-3xl font-semibold tracking-tight transition-colors duration-300 ${
                isDarkMode ? "text-[#FFFFFF]" : "text-[#101828]"
              }`}
            >
              Quản lý danh bạ
            </h1>
          </div>
        </div>

        <button
          type="button"
          className={`inline-flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-300 ${
            isDarkMode
              ? "border-blue-500 bg-slate-900 text-yellow-500 hover:bg-slate-800"
              : "border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300 hover:bg-slate-100"
          }`}
          aria-label="Toggle dark mode"
          onClick={toggleDarkMode}
        >
          {isDarkMode ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
