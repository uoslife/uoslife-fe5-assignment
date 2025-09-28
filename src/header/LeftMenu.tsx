import React from "react";
import styled from "@emotion/styled";
import UserContext from "../userContext";
import { useContext } from "react";

const StyledLeft = styled.ul`
  list-style: none;
  display: flex;
  gap: 30px;
  align-items: center;
`;

interface LeftMenuProps {}

export const LeftMenu: React.FC<LeftMenuProps> = () => {
  const { setMode } = useContext(UserContext);

  return (
    <StyledLeft>
      <li>1 to 50</li>
      <li>
        <button onClick={() => setMode(0)}>게임</button>
      </li>
      <li>
        <button
          onClick={() => {
            setMode(1);
          }}
        >
          랭킹
        </button>
      </li>
    </StyledLeft>
  );
};
export default LeftMenu;
