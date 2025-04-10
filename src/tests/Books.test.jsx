import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import BookList from "../components/BookList";
import historyBooks from "../data/books/history.json";

describe("BookList component with history books", () => {
  it("renders one card for each book in the JSON", () => {
    render(<BookList books={historyBooks} />);

    const bookCards = screen.getAllByTestId("single-book");
    expect(bookCards).toHaveLength(historyBooks.length);
  });
});
