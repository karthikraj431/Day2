import { Button, TextField } from '@mui/material'
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import React from 'react'

const Signup = () => {
  return (
      <div>
          <h1>Sign Up</h1>
      <form action="" method="post">
        <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
          Here is a gentle information that your are in the Signup page.
        </Alert>
        <TextField label='First Name' variant='filled'></TextField><br></br><br></br>
        <TextField label='Last Name' variant='filled'></TextField><br></br><br></br>
        <TextField label='Enter Password' variant='filled'></TextField><br></br><br></br>
        <TextField label='Confirm Password' variant='filled'></TextField><br></br><br></br>
        <Button variant='contained'>Submit</Button> &nbsp;
        <Button variant='contained'>Clear</Button>
              </form>
    </div>
  )
}

export default Signup