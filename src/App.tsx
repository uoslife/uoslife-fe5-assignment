/** @jsxImportSource @emotion/react */
import { useContext } from "react";
import Header from "./component/header/Header";
import UserContext from "./context/userContext";
import Ranking from "./component/atom/ranking";
import GameBoard from "./component/atom/GameBoard";

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
