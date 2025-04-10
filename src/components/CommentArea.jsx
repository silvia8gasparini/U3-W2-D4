import { useState, useEffect } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";

const apiUrl = "https://striveschool-api.herokuapp.com/api/comments/";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2VlODA0NTFkNDM2ZTAwMTVkYTI3MjEiLCJpYXQiOjE3NDM2ODM2NTQsImV4cCI6MTc0NDg5MzI1NH0.zOtyP7al4HbpviDS5DKOsqGtyj6NMyXBjnz0Mw8eJxE";

const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!asin) return;

    setIsLoading(true);
    setIsError(false);

    fetch(apiUrl + asin, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nella risposta del server");
        }
      })
      .then((data) => {
        setComments(data);
      })
      .catch((error) => {
        console.error("Errore durante il fetch:", error);
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [asin]); // SOLO asin nelle dipendenze – corretto!

  // funzione per refresh manuale da figli
  const refreshComments = () => {
    if (!asin) return;

    setIsLoading(true);
    setIsError(false);

    fetch(apiUrl + asin, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nella risposta del server");
        }
      })
      .then((data) => {
        setComments(data);
      })
      .catch((error) => {
        console.error("Errore durante il fetch:", error);
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  if (!asin) {
    return <div className="mt-3 text-muted">Nessun libro selezionato</div>;
  }

  return (
    <div className="mt-3" data-testid="comment-area">
      {isLoading && <Loading />}
      {isError && <Error />}
      <CommentsList comments={comments} refresh={refreshComments} />
      <AddComment asin={asin} refresh={refreshComments} />
    </div>
  );
};

export default CommentArea;
