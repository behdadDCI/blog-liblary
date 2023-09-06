import { useParams } from "react-router-dom";
import Books from "../components/Books";
import Book from "../components/Book";
import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";

const BookPage = () => {
  const { setIdBook } = useContext(AppContext);
  const { idBook } = useParams();

  useEffect(() => {
    setIdBook(idBook?.toString() || "");
  }, [idBook, setIdBook]);
  return <div>{idBook === undefined ? <Books /> : <Book />}</div>;
};

export default BookPage;
