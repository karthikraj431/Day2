import { Alert, Button, Typography } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';
import React, { useState } from 'react'

const Counter = () => {
    var [count1, setAmt] = useState('0')
    const add = () => { 
        setAmt(++count1)
    }
    const sub = () => {
        setAmt(--count1)
    }
  return (
      <div>
          <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
              Here is a gentle information that your are in the Number count page.
          </Alert>
          <Typography variant='h4' component='div'>Count : &nbsp;{count1}</Typography><br></br>
          <Button variant='contained' onClick={add}>+</Button> &nbsp;
          <Button variant='contained' onClick={sub}>-</Button>
    </div>
  )
}

export default Counter