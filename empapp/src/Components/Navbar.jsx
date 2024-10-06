import React from 'react'
import  { AppBar,Button,IconButton, Toolbar,Typography} from '@mui/material'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
          <AppBar >
              <br /><br /><br />
              <Toolbar>
                  <Typography variant='h6' sx={{ flexGrow: 1 }}>HOME </Typography>
                  <Link to='/Addemp'>
                      <button variant="contained" color="success">Addemp</button>
                  </Link>
                  <Link to='/Viewemp'>
                  <button variant="contained" color="success">Viewemp</button>
              </Link>
              </Toolbar>
              </AppBar>
          
    </div>
  )
}

export default Navbar
