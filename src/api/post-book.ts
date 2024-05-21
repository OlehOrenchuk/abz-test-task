export const postData = async (authorName, bookTitle) => {
  return await fetch("http://localhost:8000/books", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ authorName, bookTitle }),
  });
};
