import { lazy } from "react";

export const Home = lazy(() => import("../pages/home/Home"));
export const CreateUser = lazy(() => import("../pages/createUser/CreateUser"));
export const DetailUser = lazy(() => import("../pages/detailUser/DetailUser"));
export const EditUser = lazy(() => import("../pages/editUser/EditUser"));