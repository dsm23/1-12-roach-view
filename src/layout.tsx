import type { FunctionComponent } from "react";
import { Outlet } from "react-router";
import Footer from "~/components/footer";
import Navbar from "~/components/navbar";
import { ThemeProvider } from "~/components/theme-provider";
import { ThemeSwitcher } from "~/components/theme-switcher";

const Layout: FunctionComponent = () => (
  <ThemeProvider>
    <Navbar>
      <ThemeSwitcher />
    </Navbar>
    <main>
      <Outlet />
    </main>
    <Footer />
  </ThemeProvider>
);

export default Layout;
