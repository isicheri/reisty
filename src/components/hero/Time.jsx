import React from 'react'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs from 'dayjs';
import { Box, Typography } from '@mui/material';


const Time = () => {

  const [value, setValue] = React.useState(dayjs());
  return (
<>
<Box sx={{'& > input':{fontFamily:'Gordita'}}}>
<LocalizationProvider dateAdapter={AdapterDayjs}>
     
        <TimePicker
        disablePast={false}
        variant="standard"
  
          value={value}
          onChange={(newValue) => setValue(newValue)}
          slotProps={{
            textField: {
             variant:'standard',
             sx:{
              fontFamily: "Gordita",
             }
            },
          }}
          renderInput={(params) => <TextField {...params} variant="standard"      InputProps={{
            style: {
              fontFamily: "Gordita",
              fontSize: "10px",
              borderRadius: "10px",
              offset: " 1px solid #737373",
              // Replace with your desired font family
            },
          }} />}
        />

    </LocalizationProvider>

    </Box>

</>
  )
}

export default Time
