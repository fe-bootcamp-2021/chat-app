import Main from "../components/Main/Main";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";

const routes = {
  login: () => ({
    route: "/login",
    component: Login,
  }),
  register: () => ({
    route: "/register",
    component: Register,
  }),
  main: () => ({
    route: "/",
    component: Main,
  }),
};

export default routes;
