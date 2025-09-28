import React from "react";
import styled from "@emotion/styled";
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";
import UserContext from "../userContext";
import { useContext } from "react";

const StyledHeader = styled.header`
  background-color: rgb(177, 198, 255);
  border: 0;
  padding: 0;
  height: 10%;
  width: 100%;
  display: flex;
`;
// --- Header Props ---
interface HeaderProps {
  setResults: (results: any[]) => void;
  seconds: number;
  handleChangeLv: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

// --- Header Component ---
const Header: React.FC<HeaderProps> = ({
  setResults,
  seconds,
  handleChangeLv,
}) => {
  const { mode } = useContext(UserContext);
  return (
    <StyledHeader>
      <LeftMenu setResults={setResults} />
      {mode === 0 && (
        <RightMenu
          seconds={seconds}
          handleChangeLv={handleChangeLv}
        />
      )}
    </StyledHeader>
  );
};

export default Header;
