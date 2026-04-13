import type { FunctionComponent } from "react";
import { Link } from "react-router";

const Footer: FunctionComponent = () => (
  <footer className="w-full bg-slate-100 px-8 py-12 dark:bg-slate-900">
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 border-t border-slate-200/15 pt-8 md:grid-cols-2">
      <div>
        <div className="mb-2 text-lg font-black text-slate-900 dark:text-slate-50">
          1-12 Roach View Ltd.
        </div>
        <p className="max-w-xs text-xs font-medium text-slate-600 dark:text-slate-500">
          Management of real estate upkeep specifically for industrial units
          owned and leased in Roach View, Purdey{"'"}s Industrial Estate,
          Rochford, Essex. Registered at Companies House, UK.
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-x-8 gap-y-4 md:justify-end">
        <Link
          className="text-xs font-medium text-slate-600 hover:text-slate-900 dark:text-slate-500 dark:hover:text-white"
          to="/privacy-policy"
        >
          Privacy Policy (upcoming)
        </Link>
        <Link
          className="text-xs font-medium text-slate-600 hover:text-slate-900 dark:text-slate-500 dark:hover:text-white"
          to="/accessibility"
        >
          Accessibility (upcoming)
        </Link>
        <Link
          className="text-xs font-medium text-slate-600 hover:text-slate-900 dark:text-slate-500 dark:hover:text-white"
          to="/cookie-settings"
        >
          Cookie Settings (upcoming)
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
