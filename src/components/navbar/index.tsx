import type { ComponentProps, FunctionComponent } from "react";
import { NavLink } from "react-router";

const Navbar: FunctionComponent<ComponentProps<"nav">> = ({
  children,
  ...props
}) => (
  <header className="sticky top-0 z-50 w-full bg-white/80 shadow-[0_20px_50px_rgba(0,52,94,0.05)] backdrop-blur-md dark:bg-slate-950/80">
    <nav
      className="mx-auto max-w-7xl items-center justify-between px-8 py-4 md:flex"
      {...props}
    >
      <NavLink
        to="/"
        className="text-xl font-bold tracking-tighter text-slate-900 dark:text-slate-50"
      >
        1-12 Roach View
      </NavLink>

      <div className="items-center gap-8 text-sm font-semibold tracking-tight uppercase md:flex">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `block ${
              isActive
                ? "border-b-2 border-slate-900 text-slate-900 dark:border-white dark:text-white"
                : "mb-0.5 text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `block ${
              isActive
                ? "border-b-2 border-slate-900 text-slate-900 dark:border-white dark:text-white"
                : "mb-0.5 text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            }`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/location"
          className={({ isActive }) =>
            `block ${
              isActive
                ? "border-b-2 border-slate-900 text-slate-900 dark:border-white dark:text-white"
                : "mb-0.5 text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            }`
          }
        >
          Location
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `block ${
              isActive
                ? "border-b-2 border-slate-900 text-slate-900 dark:border-white dark:text-white"
                : "mb-0.5 text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            }`
          }
        >
          Contact
        </NavLink>

        {children}
      </div>
    </nav>
  </header>
);

export default Navbar;
