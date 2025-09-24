import { Link, useLocation } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { useEffect, useState } from "react";

const initialNavItems = [
  {
    id: 1,
    title: "Home",
    path: "/",
    isActive: true,
  },
  {
    id: 2,
    title: "Drivers",
    path: "/drivers",
    isActive: false,
  },
  {
    id: 3,
    title: "Routes",
    path: "/routes",
    isActive: false,
  },
  {
    id: 4,
    title: "Dashboard",
    path: "/dashboard",
    isActive: false,
  },
];

function Navbar() {
  const [navItems, setNavItems] = useState(initialNavItems);
  const { isDarkMode, toggleMode } = useAppContext();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    setNavItems((prev) =>
      prev.map((item) => ({
        ...item,
        isActive: item.path === pathname,
      }))
    );
  }, [pathname]);

  return (
    <header className="bg-white text-black dark:bg-gray-800 dark:text-white shadow-sm">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between py-4">
        <h1 className="text-2xl font-bold font-serif text-primary">
          <Link to="/">DRB</Link>
        </h1>
        <nav>
          <ul className="flex items-center gap-4">
            {navItems.map((item) => (
              <li
                key={item.id}
                className={`hover:text-primary transition-all duration-300 ease-in-out ${
                  item.isActive ? "text-primary" : ""
                }`}
              >
                <Link to={item.path} className="text-base font-medium">
                  {item.title}
                </Link>
              </li>
            ))}
            <li>
              <button
                onClick={toggleMode}
                className="p-2 border border-neutral-300 dark:border-neutral-700 rounded-full bg-transparent 
                cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-300 ease-in-out"
              >
                {isDarkMode ? (
                  <BsFillSunFill className="text-yellow-400" />
                ) : (
                  <BsFillMoonFill className="text-gray-800" />
                )}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
