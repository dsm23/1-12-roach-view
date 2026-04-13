import type { FunctionComponent } from "react";
import { Outlet } from "react-router";
import Footer from "~/components/footer";
import { ThemeProvider } from "~/components/theme-provider";
import { ThemeSwitcher } from "~/components/theme-switcher";

const Layout: FunctionComponent = () => (
  <ThemeProvider>
    <header>
      header
      <ThemeSwitcher />
    </header>
    <main>
      <Outlet />
    </main>
    <Footer />
  </ThemeProvider>
);

export default Layout;
