import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import BookList from "../components/BookList";
import historyBooks from "../data/books/history.json";

describe("BookList - comment rendering behavior", () => {
  it("does NOT render any SingleComment at initial load", () => {
    render(<BookList books={historyBooks} />);

    const commentItems = screen.queryAllByTestId("single-comment");
    expect(commentItems.length).toBe(0);
  });
});
