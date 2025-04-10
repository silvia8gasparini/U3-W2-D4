import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Welcome from "../components/Welcome";

describe("Welcome component", () => {
  it("renders correctly with heading and paragraph", () => {
    render(<Welcome />);

    // Verifica che il titolo sia presente
    expect(
      screen.getByRole("heading", {
        name: /welcome to the labyrinth of spirits!/i,
      })
    ).toBeInTheDocument();

    // Verifica che il paragrafo sia presente
    expect(
      screen.getByText(/follow the shadow of the wind/i)
    ).toBeInTheDocument();
  });
});
