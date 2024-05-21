import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0093e9;
  background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
  height: 100vh;
`;

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 1280px;
  background-color: white;

  padding: 40px;
`;

export const BooksList = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid black;
  border-top: 1px solid black;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledInput = styled.input`
  padding: 10px 15px;
  border-radius: 5px;
  border: 1px solid black;
  font-size: 16px;
  font-family: inherit;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 15px;
`;

export const StyledButton = styled.button`
  flex-grow: 1;
  padding: 15px 20px;
  border: none;
  font-family: inherit;
  background-color: darkslateblue;
  color: white;
`;
