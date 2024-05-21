export const getData = async () => {
  return await fetch("http://localhost:8000/books", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
