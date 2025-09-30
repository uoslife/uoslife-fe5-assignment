import React from "react";
import styled from "@emotion/styled";
import UserContext from "../../userContext";
import { useContext } from "react";

const StyledRight = styled.ul`
  list-style: none;
  margin-left: auto;
  display: flex;
  gap: 30px;
  padding-right: 30px;
  align-items: center;
`;

const TimeBlock = styled.div`
  min-width: 200px;
`;

const RightMenu = () => {
  const { level, setLevel, seconds } = useContext(UserContext);
  const handleChangeLv = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "Lv1") {
      setLevel("Lv1");
    } else if (e.target.value === "Lv2") {
      setLevel("Lv2");
    } else if (e.target.value === "Lv3") {
      setLevel("Lv3");
    }
  };
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
