import { useState } from "react"
import { StyledHeader } from "./styles";


export const Header = () =>{
 
  const handleSubmit = (event) =>{
    event.preventDefault();
    console.log('Enter', inputSearch)
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