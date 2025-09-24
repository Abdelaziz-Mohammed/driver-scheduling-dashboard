import { createContext, useContext, useEffect, useState } from "react";
import initialDrivers from "../data/drivers.data.js";
import initialRoutes from "../data/routes.data.js";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => setIsDarkMode((prevMode) => !prevMode);

  useEffect(() => {
    const storedMode = localStorage.getItem("mode");
    if (
      storedMode === "dark" ||
      (!storedMode && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("mode", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  // drivers and routes
  const [drivers, setDrivers] = useState(
    localStorage.getItem("drivers")
      ? JSON.parse(localStorage.getItem("drivers"))
      : initialDrivers
  );
  const [routes, setRoutes] = useState(
    localStorage.getItem("routes")
      ? JSON.parse(localStorage.getItem("routes"))
      : initialRoutes
  );

  const addNewDriver = (driver) => {
    setDrivers((prev) => [...prev, { ...driver, id: Date.now().toString() }]);
    localStorage.setItem(
      "drivers",
      JSON.stringify([...drivers, { ...driver, id: Date.now().toString() }])
    );
  };

  const addNewRoute = (route) => {
    setRoutes((prev) => [...prev, { ...route, id: Date.now().toString() }]);
    localStorage.setItem(
      "routes",
      JSON.stringify([...routes, { ...route, id: Date.now().toString() }])
    );
  };

  const getDriverAssignments = (driverId) => {
    return routes.filter((route) => route.assignedDriverId === driverId);
  };

  const assignRouteToDriver = (routeId, driverId) => {
    setRoutes((prev) =>
      prev.map((route) =>
        route.id === routeId ? { ...route, assignedDriverId: driverId } : route
      )
    );
    localStorage.setItem(
      "routes",
      JSON.stringify(
        routes.map((route) =>
          route.id === routeId
            ? { ...route, assignedDriverId: driverId }
            : route
        )
      )
    );
  };

  return (
    <AppContext.Provider
      value={{
        isDarkMode,
        toggleMode,
        drivers,
        addNewDriver,
        routes,
        addNewRoute,
        getDriverAssignments,
        assignRouteToDriver,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
