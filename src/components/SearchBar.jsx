import {React, useState } from 'react'
import { useNavigate } from "react-router-dom"
import { Paper, IconButton } from "@mui/material"
import { SearchIcon } from "@mui/icons-material"

const SearchBar = () => {
  return (
    <Paper 
      component="form"
      onSubmit={() => {}}
      sx={{ 
        borderRadius: 20, 
        border: "1px solid #e3e3e3", 
        pl: 8, 
        boxShadow: "none", 
        mr: { sm: 5 }}}
     >
        <input 
          className='search-bar'
          type="text"
          placeholder="Quero assistir..." 
          value=""
          onChange={() => {}}
          />  
          <IconButton>
            <SearchIcon />
          </IconButton>
    </Paper>
  )
}

export default SearchBar