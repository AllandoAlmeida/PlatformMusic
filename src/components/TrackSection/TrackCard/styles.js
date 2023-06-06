import styled from "styled-components";

export const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1 0 230px;
  height: max-content;
  border: 1px solid var(--color-blue-600);
  box-shadow: 0.5px 0.5px 0.5px 0px var(--color-blue-600);
  background-color: transparent;
  border-radius: 5px;
  color: white;
  width: 40%;
  height: 180px;
`;

export const StyledLi = styled.li`
  list-style-type: none;
`;

export const StyledImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 5px;
`;
