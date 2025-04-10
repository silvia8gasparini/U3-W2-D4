import { Card } from "react-bootstrap";

const SingleBook = ({ book, isSelected, onSelect }) => {
  const { title, img } = book;

  return (
    <Card
      onClick={onSelect}
      style={{
        border: isSelected ? "3px solid red" : "1px solid black",
        cursor: "pointer",
      }}
      className="mb-3"
    >
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;
