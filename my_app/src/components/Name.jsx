import { Alert, Button, Typography } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';
import React, { useEffect, useState } from 'react'

const Name = () => {
    var [nme, setNme] = useState()
    const ab = () => {
        setNme('Arunima')
    }
    const cd = () => {
        setNme('Karthik')
    }
    const ef = () => {
        setNme('Adhil')
    }
    useEffect(()=>{ab()},[])
  return (
      <div>
          <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
              Here is a gentle information that your are in the selected name page.
          </Alert>
          <Typography variant='h4' component='div'>Welcome &nbsp;{nme}</Typography><br></br>
          <Button variant='contained' onClick={ab}>Arunima</Button> &nbsp;
          <Button variant='contained' onClick={cd}>Karthik</Button>&nbsp;
          <Button variant='contained' onClick={ef}>Adhil</Button>&nbsp;
    </div>
  )
}

export default Name