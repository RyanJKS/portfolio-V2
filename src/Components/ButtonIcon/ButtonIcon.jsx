import React from 'react'
import Tooltip from '@mui/material/Tooltip';
import { Button } from '@mui/material'

function ButtonIcon({Component,comment, handleClick,iconColor}) {
  return (
    <Tooltip title={comment}>
        <Button style={{ boxShadow:"rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"}} onClick={handleClick}>
            <Component size={30} style={{ fill: iconColor}}/>
        </Button>
    </Tooltip>
  )
}

export default ButtonIcon