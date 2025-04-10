import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import CommentArea from "../components/CommentArea";

describe("CommentArea basic rendering", () => {
  it("renders the component wrapper", () => {
    render(<CommentArea asin="1234567890" />);
    const commentArea = screen.getByTestId("comment-area");
    expect(commentArea).toBeInTheDocument();
  });
});
