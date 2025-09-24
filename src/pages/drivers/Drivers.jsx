import { useState } from "react";
import { useAppContext } from "../../context/AppContext";

export default function DriverForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [availability, setAvailability] = useState([]);
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const { addNewDriver } = useAppContext();

  function toggleDay(day) {
    setAvailability((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  }

  function handleAddDriver(e) {
    e.preventDefault();

    // validate inputs
    if (!name) {
      return alert("Please enter driver's name");
    }
    if (!phone) {
      return alert("Please enter driver's phone number");
    }
    if (availability.length === 0) {
      return alert("Please select at least one available day");
    }

    // add driver
    addNewDriver({ name, phone, availability });
    alert("Driver added successfully");

    // reset form
    setName("");
    setPhone("");
    setAvailability([]);
  }

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4 py-20">
        <form
          onSubmit={handleAddDriver}
          className="border border-neutral-300 dark:border-neutral-700 rounded-lg py-8 px-4 shadow-lg"
        >
          <h3 className="text-lg sm:text-xl font-bold text-primary dark:text-white text-center mb-6">
            Add New Driver
          </h3>
          <div className="flex flex-col gap-8">
            <input
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="outline-0 border border-neutral-300 dark:border-neutral-700 rounded-md px-3 py-2 w-full mb-4
              placeholder:text-sm placeholder:sm:text-base placeholder:text-neutral-400 dark:placeholder:text-neutral-500
              text-sm sm:text-base bg-transparent text-black dark:text-white"
            />
            <input
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="outline-0 border border-neutral-300 dark:border-neutral-700 rounded-md px-3 py-2 w-full mb-4
              placeholder:text-sm placeholder:sm:text-base placeholder:text-neutral-400 dark:placeholder:text-neutral-500
              text-sm sm:text-base bg-transparent text-black dark:text-white"
            />
            <div className="text-base text-neutral-600 dark:text-neutral-400">
              Availability
            </div>
            <div className="flex items-center gap-2 mt-2 flex-wrap">
              {days.map((d) => (
                <button
                  type="button"
                  key={d}
                  className={`outline-0 border-0 px-3 py-1 rounded-md cursor-pointer
                  transition-all duration-300 ease-in-out ${
                    availability.includes(d)
                      ? "bg-primary text-white"
                      : "bg-neutral-300 dark:bg-neutral-800 text-black dark:text-white"
                  }`}
                  onClick={() => toggleDay(d)}
                >
                  {d}
                </button>
              ))}
            </div>
            <button
              type="submit"
              className="outline-0 border-0 px-8 py-2 rounded-md bg-primary text-white mt-6 cursor-pointer
              hover:bg-primary/80 transition-all duration-300 ease-in-out"
            >
              Add Driver
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
