import React from "react";
import styled from "@emotion/styled";
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";
import UserContext from "../../context/userContext";
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
}

// --- Header Component ---
const Header: React.FC<HeaderProps> = () => {
  const { mode } = useContext(UserContext);
  return (
    <StyledHeader>
      <LeftMenu />
      {mode === 0 && (
        <RightMenu/>
      )}
    </StyledHeader>
  );
};

export default Header;
