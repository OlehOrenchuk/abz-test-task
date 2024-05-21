import type { AppProps } from "next/app";
import { GlobalStyle } from "@/styles/index.styles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
      <ToastContainer />
    </>
  );
}
