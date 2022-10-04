import {React, useState } from 'react'
import { useNavigate } from "react-router-dom"
import { Paper, IconButton } from "@mui/material"
import { Search } from "@mui/icons-material"

const SearchBar = () => {

  return (
    <Paper 
      component="form"
      onSubmit={() => {}}
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
          onChange={() => {}}
          />  
          <IconButton>
            <Search />
          </IconButton>
    </Paper>
  )
}

export default SearchBar
// 35 MINUTOS PAUSADO