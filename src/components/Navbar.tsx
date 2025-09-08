import { Link } from "react-router-dom";
const teamName = import.meta.env.VITE_TEAM_NAME;
import Pages from "../pages.js";

export function Navbar() {
  return (
    <nav className="text-white bg-[#567357]">
      <div className="container mx-auto py-10 flex items-center justify-between">
        <h1 className="text-4xl font-bold">{teamName}</h1>
        <ul className="list-none p-0 m-0 flex justify-center flex-wrap">
          {Pages.map((item, index) => (
            <li key={index} className="mx-2 relative group">
              {("folder" in item && item.folder) ? (
                <div className="relative">
                  <button
                    className="bg-transparent border-0 text-white-800 text-xl font-semibold cursor-pointer px-4 py-2 flex items-center"
                    // 移除onMouseEnter和onMouseLeave事件
                  >
                    {item.name}
                    <span className="ml-2 text-xs transition-transform group-hover:rotate-180">
                      ▼
                    </span>
                  </button>
                  <ul className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 min-w-[200px] z-10 hidden group-hover:block">
                    {item.folder.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          to={subItem.path || ''}
                          className="block px-4 py-2 text-xl text-gray-800 text-decoration-none hover:bg-gray-100"
                        >
                          {subItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <Link
                  to={"path" in item ? (item.path||'') : ''}
                  className="inline-block px-4 py-2 text-xl text-white-800 text-decoration-none font-semibold hover:text-blue-500"
                >
                  {"title" in item ? item.title : ''}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
