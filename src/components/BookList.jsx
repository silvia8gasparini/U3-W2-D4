import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";

const BookList = ({ books }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedAsin, setSelectedAsin] = useState(null);

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container className="mt-4">
      <Form.Group controlId="search">
        <Form.Control
          type="text"
          placeholder="Cerca"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </Form.Group>
      <Row className="mt-3">
        <Col md={8}>
          <Row>
            {filteredBooks.map((book) => (
              <Col xs={12} sm={6} md={6} lg={4} key={book.asin}>
                <SingleBook
                  book={book}
                  isSelected={book.asin === selectedAsin}
                  onSelect={() =>
                    setSelectedAsin(
                      selectedAsin === book.asin ? null : book.asin
                    )
                  }
                />
              </Col>
            ))}
          </Row>
        </Col>
        <Col md={4}>
          {selectedAsin ? (
            <CommentArea asin={selectedAsin} />
          ) : (
            <p className="text-muted">
              Seleziona un libro per vedere i commenti.
            </p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default BookList;
