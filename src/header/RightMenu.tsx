import React from "react";
import styled from "@emotion/styled";
import UserContext from "../userContext";
import { useContext } from "react";

const StyledRight = styled.ul`
  list-style: none;
  margin-left: auto;
  display: flex;
  gap:30px;
  padding-right: 30px;
  align-items: center;
`

const TimeBlock = styled.div`
min-width: 200px;
`;

interface RightMenuProps {
  seconds: number;
  handleChangeLv: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const RightMenu: React.FC<RightMenuProps> = ({
  seconds,
  handleChangeLv,
}) => {
    const { level } = useContext(UserContext);
  return (
    <StyledRight>
      <li>
        <select
          id="difficult"
          name="difficult"
          onChange={handleChangeLv}
          value={level}
        >
          <option value="Lv1">Level 1</option>
          <option value="Lv2">Level 2</option>
          <option value="Lv3">Level 3</option>
        </select>
      </li>
      <li>
        <TimeBlock>{seconds.toFixed(2)}</TimeBlock>
      </li>
    </StyledRight>
  );
};
export default RightMenu;
