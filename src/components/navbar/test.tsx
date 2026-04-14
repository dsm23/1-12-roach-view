import { describe, expect, it } from "vitest";
import { createRoutesStub } from "react-router";
import { screen } from "@testing-library/react";
import { render } from "~/test-utils/render";
import Navbar from ".";

const Stub = createRoutesStub([
  {
    path: "/",
    Component: Navbar,
  },
  {
    path: "/about",
    Component: () => <div>About</div>,
  },
  {
    path: "/location",
    Component: () => <div>Location</div>,
  },
  {
    path: "/contact",
    Component: () => <div>Contact</div>,
  },
]);

describe("component", () => {
  describe("Navbar", () => {
    it("should render correctly", () => {
      render(<Stub />);

      expect(screen.getByRole("navigation")).toBeInTheDocument();
    });
  });
});
