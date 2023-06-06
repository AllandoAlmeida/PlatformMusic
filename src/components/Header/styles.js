import styled from "styled-components";

export const StyledHeader = styled.header`
width: 100%;
max-width: 60%;
margin: 20px auto;
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
gap:15px;
padding: 0 5%;

form{
  width: 100%;
  max-width: 60%;
  min-width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap:wrap;
  flex: 1 0 200px;
  gap: 15px
}

input{
  width: 90px;
  flex: 1 0 230px;
  padding: 0 10px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid var(--color-blue-600);
  box-shadow: 1px 1px 1px 0.5px var(--color-blue-600);
  background-color: transparent;
}

button{
  width: 25%;
  height: 40px;
  flex: 1 0 100px;
  border-radius: 5px;
  border: 1px solid var(--color-blue-600);
  box-shadow: 1px 1px 1px 0.5px var(--color-blue-600);
  background-color: transparent;
  color: white
}

`