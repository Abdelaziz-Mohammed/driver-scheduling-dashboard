import { useState } from "react";
import { FaAngleDown, FaAngleUp, FaPhone } from "react-icons/fa6";
import { useAppContext } from "../../context/AppContext";
import { FaDotCircle, FaRegDotCircle } from "react-icons/fa";

function Dashboard() {
  const { drivers, routes, getDriverAssignments, assignRouteToDriver } =
    useAppContext();
  const [isDriversOpen, setIsDriversOpen] = useState(true);
  const [isRoutesOpen, setIsRoutesOpen] = useState(true);

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-lg sm:text-xl font-bold text-primary dark:text-white">
          Dashboard
        </h2>
        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
          Welcome to the dashboard!
        </p>
        <div className="flex flex-col gap-6 py-6">
          <div className="border border-neutral-300 dark:border-neutral-700 rounded-lg p-4 bg-white dark:bg-gray-800 shadow-sm">
            <h3
              className={`text-lg font-bold text-primary dark:text-white mb-4 ${
                isDriversOpen && "border-b"
              } border-b-neutral-200 dark:border-b-neutral-700 pb-2 flex items-center justify-between`}
            >
              <span>Drivers</span>
              <button
                onClick={() => setIsDriversOpen((prev) => !prev)}
                className="outline-0 border border-neutral-300 dark:border-neutral-700 rounded-full p-1 flex items-center justify-center cursor-pointer"
              >
                {isDriversOpen ? <FaAngleUp /> : <FaAngleDown />}
              </button>
            </h3>
            <ul className={` ${isDriversOpen ? "block" : "hidden"}`}>
              {drivers.map((driver) => (
                <li
                  key={driver.id}
                  className="mb-4 not-last:border-b border-b-neutral-200 dark:border-b-neutral-700 pb-4
                  flex flex-col gap-2"
                >
                  <strong className="text-primary dark:text-white">
                    {driver.name}
                  </strong>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm flex items-center gap-2">
                    <FaPhone className="text-xs" /> {driver.phone}
                  </p>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                    <b className="text-primary dark:text-white">
                      Available on:
                    </b>{" "}
                    {driver.availability.join(" | ")}
                  </p>
                  <div className="text-neutral-600 dark:text-neutral-400 text-sm">
                    <b className="text-primary dark:text-white">
                      Assigned Routes:
                    </b>
                    <ul>
                      {getDriverAssignments(driver.id).length > 0 ? (
                        getDriverAssignments(driver.id).map((route) => (
                          <li
                            key={route.id}
                            className="flex items-center gap-2"
                          >
                            <FaRegDotCircle className="text-xs" /> {route.title}{" "}
                            - {route.date} - {route.time}
                          </li>
                        ))
                      ) : (
                        <li>No assigned routes</li>
                      )}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-neutral-300 dark:border-neutral-700 rounded-lg p-4 bg-white dark:bg-gray-800 shadow-sm">
            <h3
              className={`text-lg font-bold text-primary dark:text-white mb-4 ${
                isRoutesOpen && "border-b"
              } border-b-neutral-200 dark:border-b-neutral-700 pb-2 flex items-center justify-between`}
            >
              Routes
              <button
                onClick={() => setIsRoutesOpen((prev) => !prev)}
                className="outline-0 border border-neutral-300 dark:border-neutral-700 rounded-full p-1 flex items-center justify-center cursor-pointer"
              >
                {isRoutesOpen ? <FaAngleUp /> : <FaAngleDown />}
              </button>
            </h3>
            <ul className={` ${isRoutesOpen ? "block" : "hidden"}`}>
              {routes.map((route) => (
                <li
                  key={route.id}
                  className="mb-4 not-last:border-b border-b-neutral-200 dark:border-b-neutral-700 pb-4
                  flex flex-col gap-2"
                >
                  <strong className="text-primary dark:text-white">
                    {route.title}
                  </strong>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm flex items-center gap-2">
                    <FaPhone className="text-xs" /> {route.date} - {route.time}
                  </p>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm font-medium">
                    {route.assignedDriverId ? (
                      <>
                        Assigned to:{" "}
                        <span className="text-primary dark:text-white font-semibold">
                          {
                            drivers.find((d) => d.id === route.assignedDriverId)
                              ?.name
                          }
                        </span>
                        <button
                          onClick={() => assignRouteToDriver(route.id, null)}
                          className="ml-6 px-3 py-1 text-xs bg-red-500 text-white rounded-md hover:bg-red-600 transition-all duration-300 ease-in-out cursor-pointer"
                        >
                          Unassign
                        </button>
                      </>
                    ) : (
                      <>
                        Unassigned{" "}
                        <select
                          className="outline-none ml-6 p-1 border border-neutral-300 dark:border-neutral-700 rounded-md bg-transparent text-sm cursor-pointer"
                          onChange={(e) =>
                            assignRouteToDriver(route.id, e.target.value)
                          }
                          defaultValue=""
                        >
                          <option value="">Select Driver</option>
                          {drivers.map((driver) => (
                            <option key={driver.id} value={driver.id}>
                              {driver.name}
                            </option>
                          ))}
                        </select>
                      </>
                    )}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
