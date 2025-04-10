import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import BookList from "../components/BookList";
import historyBooks from "../data/books/history.json";

describe("selezione singolo libro", () => {
  it("toglie la selezione dal primo libro cliccando il secondo", () => {
    render(<BookList books={historyBooks} />);

    const cards = screen.getAllByTestId("single-book");

    fireEvent.click(cards[0]);
    expect(cards[0]).toHaveStyle("border: 3px solid red");
    expect(cards[1]).toHaveStyle("border: 1px solid black");

    fireEvent.click(cards[1]);
    expect(cards[1]).toHaveStyle("border: 3px solid red");
    expect(cards[0]).toHaveStyle("border: 1px solid black");
  });
});
