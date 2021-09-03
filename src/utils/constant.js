import HomePage from "../containers/System/HomePage/HomePage";
import UserPage from "../containers/System/UserPage/UserPage";

export const path = {
  HOME: "/",
  LOGIN: "/login",
  LOG_OUT: "/logout",
  SYSTEM: "/system",
};
export const PAGE_ROUTES = [
  {
    name: "Home",
    path: "/system",
    component: () => <HomePage />,
    exact: false,
  },
  {
    name: "Camera 360",
    path: "/system/camera-360",
    exact: false,
  },
  {
    name: "Map Camera",
    path: "/system/map-camera",
    exact: false,
  },
  {
    name: "Person",
    path: "/system/person",
    exact: false,
  },
  {
    name: "Traffic",
    path: "/system/traffic",
    exact: false,
  },
  {
    name: "Violation",
    path: "/system/violation",
    exact: false,
  },
  {
    name: "User",
    path: "/system/user-manage",
    exact: true,
    component: () => <UserPage />,
  },
];
