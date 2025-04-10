import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import BookList from "../components/BookList";
import historyBooks from "../data/books/history.json";

describe("Book selection behavior", () => {
  it("adds red border to selected book", () => {
    render(<BookList books={historyBooks} />);

    const bookCards = screen.getAllByTestId("single-book");

    // Clicca il primo libro
    fireEvent.click(bookCards[0]);

    // Verifica che il primo libro abbia un bordo rosso
    expect(bookCards[0]).toHaveStyle("border: 3px solid red");

    // Verifica che l'altro libro NON sia selezionato
    expect(bookCards[1]).toHaveStyle("border: 1px solid black");
  });
});
