
import { useState } from "react";
import { StyledHeader } from "./styles";


export const Header = ({callback}) =>{
  const [inputSearch, setInputSearch] = useState('');
  
  console.log('header')
  const handleSubmit = (event) =>{
    event.preventDefault();
    callback(inputSearch)
  }

  return(
    <StyledHeader>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Buscar..." onChange={(event) => setInputSearch(event.target.value)}/>
        <button type="submit">Buscar</button>
      </form>
    </StyledHeader>
  )
}