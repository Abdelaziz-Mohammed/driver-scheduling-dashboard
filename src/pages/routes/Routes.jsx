import { useState } from "react";
import { useAppContext } from "../../context/AppContext";

function Routes() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const { addNewRoute } = useAppContext();

  const handleAddRoute = (e) => {
    e.preventDefault();

    // Validate inputs
    if (!title) {
      return alert("Please enter route title");
    }
    if (!date) {
      return alert("Please select route date");
    }
    if (!time) {
      return alert("Please select route time");
    }

    // Add new route
    addNewRoute({ title, date, time, assignedDriverId: null });
    alert("Route added successfully");

    // Reset form
    setTitle("");
    setDate("");
    setTime("");
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4 py-20">
        <form
          onSubmit={handleAddRoute}
          className="border border-neutral-300 dark:border-neutral-700 rounded-lg py-8 px-4 shadow-lg"
        >
          <h3 className="text-lg sm:text-xl font-bold text-primary dark:text-white text-center mb-6">
            Add New Route
          </h3>
          <div className="flex flex-col gap-8">
            <input
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="outline-0 border border-neutral-300 dark:border-neutral-700 rounded-md px-3 py-2 w-full mb-4
              placeholder:text-sm placeholder:sm:text-base placeholder:text-neutral-400 dark:placeholder:text-neutral-500
              text-sm sm:text-base bg-transparent text-black dark:text-white"
            />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="outline-0 border border-neutral-300 dark:border-neutral-700 rounded-md px-3 py-2 w-full mb-4
              placeholder:text-sm placeholder:sm:text-base placeholder:text-neutral-400 dark:placeholder:text-neutral-500
              text-sm sm:text-base bg-transparent text-black dark:text-white"
            />
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="outline-0 border border-neutral-300 dark:border-neutral-700 rounded-md px-3 py-2 w-full mb-4
              placeholder:text-sm placeholder:sm:text-base placeholder:text-neutral-400 dark:placeholder:text-neutral-500
              text-sm sm:text-base bg-transparent text-black dark:text-white"
            />
            <button
              type="submit"
              className="outline-0 border-0 px-8 py-2 rounded-md bg-primary text-white mt-6 cursor-pointer
              hover:bg-primary/80 transition-all duration-300 ease-in-out"
            >
              Add Route
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Routes;
