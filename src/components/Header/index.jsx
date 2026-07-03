export default function Header({ isDark, toggleDark }) {
  return (
    <header className="w-full bg-transparent pt-6 pb-2">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-black dark:bg-white text-white dark:text-black rounded-xl shadow-sm">
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
              className="lucide lucide-library w-5 h-5"
              aria-hidden="true"
            >
              <path d="m16 6 4 14"></path>
              <path d="M12 6v14"></path>
              <path d="M8 8v12"></path>
              <path d="M4 4v16"></path>
            </svg>
          </div>
          <h1 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Class<span className="text-gray-400 font-medium">Manager</span>
          </h1>
        </div>
        <button
          onClick={toggleDark}
          className="p-2.5 rounded-xl bg-white dark:bg-[#111] text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#222] transition-all border border-gray-200 dark:border-[#333] shadow-sm"
          aria-label="Toggle theme"
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
            className="lucide lucide-moon w-4 h-4"
            aria-hidden="true"
          >
            <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"></path>
          </svg>
        </button>
      </div>
    </header>
  );
}
