import React, { useEffect, useState } from "react";
import * as S from "./index.styles";
import { postData } from "@/api/post-book";
import { toast } from "react-toastify";
import { getData } from "@/api/get-books";

interface bookType {
  id: number;
  authorName: string;
  bookTitle: string;
}

const Home = () => {
  const [authorName, setAuthorName] = useState("");
  const [bookTitle, setBookTitle] = useState("");

  const [books, setBooks] = useState<bookType[]>([]);

  const handlePost = async () => {
    if (!authorName || !bookTitle) {
      toast("Fill all inputs to add book!", {
        type: "error",
        autoClose: 1500,
        position: "top-center",
      });
      return 0;
    }

    const response = await postData(authorName, bookTitle);

    if (response.ok) {
      toast(
        `Successfully added book for Author: ${authorName} , book: ${bookTitle} with ${response.status} code`,
        {
          type: "success",
          autoClose: 2000,
          position: "top-center",
        }
      );
      handleGet();
      setAuthorName("");
      setBookTitle("");
      return response.json();
    }
  };

  const handleGet = async () => {
    toast("Successfully fetched books!", {
      type: "success",
      autoClose: 2000,
      position: "top-center",
    });

    const response = await getData();
    setBooks(await response.json());
  };

  const handleClearGet = () => {
    setBooks([]);
  };

  return (
    <S.Container>
      <S.Wrapper>
        <h2>Control Block:</h2>
        <S.ButtonWrapper>
          <S.StyledButton onClick={handlePost}>POST</S.StyledButton>
          <S.StyledButton onClick={handleGet}>GET</S.StyledButton>
          <S.StyledButton onClick={handleClearGet}>CLEAR GET</S.StyledButton>
        </S.ButtonWrapper>

        <h2>Input Block:</h2>
        <S.InputWrapper>
          <S.StyledInput
            type="text"
            placeholder="Author Name"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
          />
          <S.StyledInput
            type="text"
            placeholder="Book Title"
            value={bookTitle}
            onChange={(e) => setBookTitle(e.target.value)}
          />
        </S.InputWrapper>

        <h2>Fetched Data Block:</h2>

        <h4>Index - Book Author - Book Title</h4>
        {books.length !== 0 ? (
          <S.BooksList>
            {books.map((book, index) => {
              return (
                <p key={book.id}>
                  {index + 1} - {book.authorName} - {book.bookTitle}
                </p>
              );
            })}
          </S.BooksList>
        ) : null}
      </S.Wrapper>
    </S.Container>
  );
};

export default Home;
