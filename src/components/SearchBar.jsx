import {React, useState } from 'react'
import { useNavigate } from "react-router-dom"
import { Paper, IconButton } from "@mui/material"
import { Search } from "@mui/icons-material"

const SearchBar = () => {
  const [ searchTerm, setSearchTerm ] = useState('')

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm('');
    }
  }

  return (
    <Paper 
      component="form"
      onSubmit={handleSubmit}
      sx={{ 
        borderRadius: 20, 
        border: "1px solid #e3e3e3", 
        pl: 4, 
        boxShadow: "none", 
        mr: { sm: 5 }
      }}
     >
        <input        
          style={{ border: 'none', outline: "none"}}
          placeholder="Quero assistir..."
          type="text"
          className='search-bar'
          value={searchTerm}
          onChange={({ target }) => setSearchTerm(target.value)}
          />  
          <IconButton>
            <Search />
          </IconButton>
    </Paper>
  )
}

export default SearchBar
// 35 MINUTOS PAUSADO