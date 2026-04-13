import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "~/test-utils/render";
import Footer from ".";

describe("component", () => {
  describe("Footer", () => {
    it("should render correctly", () => {
      render(<Footer />);

      expect(screen.getByRole("contentinfo")).toBeInTheDocument();
    });
  });
});
