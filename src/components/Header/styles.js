import styled from "styled-components";

export const StyledHeader = styled.header`
width: 100%;
max-width: 80%;
margin: 20px auto;
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
gap:15px;

form{
  width: 100%;
  max-width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px
}

input{
  width: 60%;
  padding: 0 10px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid var(--color-blue-600);
  box-shadow: 1px 1px 1px 0.5px var(--color-blue-600);
  background-color: transparent;
}

button{
  height: 40px;
  width: 90px;
  border-radius: 5px;
  border: 1px solid var(--color-blue-600);
  box-shadow: 1px 1px 1px 0.5px var(--color-blue-600);
  background-color: transparent;
  color: white
}

`