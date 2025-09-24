import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto p-4 flex flex-col items-center justify-center gap-10 py-60">
        <h1 className="text-3xl font-bold text-primary dark:text-white text-center">
          Welcome to our Driver Scheduling App
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 w-full">
          <Link
            to="/drivers"
            className="outline-0 flex items-center justify-center border-2 border-primary text-primary text-base font-medium bg-transparent 
            hover:text-white hover:bg-primary dark:bg-primary dark:text-white dark:hover:bg-primary/80
            col-span-1 py-2 rounded-3xl transition-all duration-300 ease-in-out"
          >
            Add New Driver
          </Link>
          <Link
            to="/routes"
            className="outline-0 flex items-center justify-center border-2 border-primary text-primary text-base font-medium bg-transparent 
            hover:text-white hover:bg-primary dark:bg-primary dark:text-white dark:hover:bg-primary/80
            col-span-1 py-2 rounded-3xl transition-all duration-300 ease-in-out"
          >
            Add New Route
          </Link>
          <Link
            to="/dashboard"
            className="outline-0 flex items-center justify-center border-2 border-primary text-primary text-base font-medium bg-transparent 
            hover:text-white hover:bg-primary dark:bg-primary dark:text-white dark:hover:bg-primary/80
            col-span-1 py-2 rounded-3xl transition-all duration-300 ease-in-out  md:col-span-2"
          >
            View Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
