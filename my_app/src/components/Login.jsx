import { Button, TextField } from '@mui/material'
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import React from 'react'

const Login = () => {
  return (
      <div>
          <form action="" method="post">
        <h1>Login</h1>
        <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
          Here is a gentle information that your are in the Login page.
        </Alert>
              <TextField label='Username' variant='filled'></TextField><br></br><br></br>
              <TextField label='Password' variant='filled'></TextField><br></br><br></br>
              <Button variant='contained'>Submit</Button> &nbsp;
              <Button variant='contained'>Clear</Button>
          </form>
    </div>
  )
}

export default Login