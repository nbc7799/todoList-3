import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
// creatRoot메서드는 null타입 반환값을 받지않아서 오류가 발생하기에 nonNull의 단언인 !을 붙여줌//
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
