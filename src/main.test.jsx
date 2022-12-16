import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App render test", () => {
  test("Should render without crashing", () => {
    render(<App />);
    expect(screen.getByRole("heading", { name: "React Demo" })).toBeDefined();
  });
});
