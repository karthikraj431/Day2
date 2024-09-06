import { Alert, Button, TextField, Typography } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';
import React, { useState } from 'react'

const Statebasics = () => {
    var [fname, setFname] = useState('Karthik Raj')
    var [cout, setCout] = useState()
    const takeInput = (a) => {
        setFname(a.target.value)
    }
    const handleInput = (a) =>
    {
        setCout(fname)
            }
  return (
      <div>
          <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
              Here is a gentle information that your are in the Name stating page.
          </Alert>
          <Typography variant='h4' component='div'>Welcome &nbsp;{cout} </Typography>
          <TextField variant='filled' label='Enter Name' onChange={takeInput}></TextField><br></br><br></br>
          <Button variant='contained' onClick={handleInput}>Enter</Button>
    </div>
  )
}

export default Statebasics