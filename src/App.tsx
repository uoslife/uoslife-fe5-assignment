/** @jsxImportSource @emotion/react */
import { useContext } from "react";
import Header from "./header/Header";
import UserContext from "./userContext";
import Ranking from "./ranking";
import GameBoard from "./GameBoard";

function App() {
  const { mode } = useContext(UserContext);

  return (
    <>
      <Header />
      <body>
        {mode === 0 && <GameBoard />}
        {mode === 1 && <Ranking />}
      </body>
    </>
  );
}

export default App;
