import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import React from 'react'
import { Link } from 'react-router-dom'
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';

const Navbar = () => {
    const actions = [
        { icon: <FileCopyIcon />, name: 'Copy' },
        { icon: <SaveIcon />, name: 'Save' },
        { icon: <PrintIcon />, name: 'Print' },
        { icon: <ShareIcon />, name: 'Share' },
    ];
  return (
      <div>
          <Box sx={{ flexGrow: 1 }}>
              <AppBar position='static'>
                  <SpeedDial
                      ariaLabel="SpeedDial basic example"
                      sx={{ position: 'absolute', bottom: 16, right: 16 }}
                      icon={<SpeedDialIcon />}>
                      {actions.map((action) => (
                          <SpeedDialAction
                              key={action.name}
                              icon={action.icon}
                              tooltipTitle={action.name}
                          />
                      ))}
                  </SpeedDial>
                  <Toolbar>
                      <IconButton size="large"
                      edge="start"
                      variant="contained"
                      aria-label="menu"
                          sx={{ mr: 2 }}>
                         <MenuIcon></MenuIcon>
                      </IconButton>
                      <Typography align='left' variant='h6' component="div"  sx={{ flexGrow: 1 }}>Welcome</Typography>
                      <Link to='/login'>
                          <Button variant='contained'>Login</Button></Link>&nbsp;
                      <Link to='/signup'>
                          <Button variant='contained'>Signup</Button></Link>&nbsp;
                      <Link to='/state'>
                          <Button variant='contained'>State</Button></Link>&nbsp;
                      <Link to='/c'>
                          <Button variant='contained'>Counter</Button></Link>&nbsp;
                      <Link to='/n'>
                          <Button variant='contained'>Name</Button></Link>&nbsp;
                      <Link to='/a'>
                          <Button variant='contained'>API</Button></Link>&nbsp;
                      <Link to='/p'>
                          <Button variant='contained'>Pokemon</Button></Link>&nbsp;
                  </Toolbar>
              </AppBar>
          </Box>
          <br></br>
    </div>
  )
}

export default Navbar