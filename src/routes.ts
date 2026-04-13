import {
  type RouteConfig,
  route,
  index,
  layout,
} from "@react-router/dev/routes";

export default [
  layout("./layout.tsx", [
    index("./routes/home.tsx"),
    route("about", "./routes/about.tsx"),
    route("location", "./routes/location.tsx"),
    route("accessibility", "./routes/accessibility.tsx"),
    route("privacy-policy", "./routes/privacy.tsx"),
    route("cookie-settings", "./routes/cookies.tsx"),
    // route("login", "./auth/login.tsx"),
    // route("register", "./auth/register.tsx"),
  ]),

  // ...prefix("concerts", [
  //   index("./concerts/home.tsx"),
  //   route(":city", "./concerts/city.tsx"),
  //   route("trending", "./concerts/trending.tsx"),
  // ]),
] satisfies RouteConfig;
