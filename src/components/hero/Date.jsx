import React from 'react'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { Box, Typography } from '@mui/material';


const Date = () => {

  const [value, setValue] = React.useState(dayjs());
  return (
<>
<Box sx={{'& > input':{fontFamily:'Gordita'}}}>
<LocalizationProvider dateAdapter={AdapterDayjs}>
     
        <DatePicker
        disablePast={true}
        variant="standard"
          views={["year", 'month', 'day']}
          value={value}
          onChange={(newValue) => setValue(newValue)}
          slotProps={{
            textField: {
             variant:'standard',
             sx:{
              fontFamily: "Gordita",
              fontSize: "12px"
             }
            },
          }}
          renderInput={(params) => <TextField {...params} variant="standard"      InputProps={{
            style: {
              fontFamily: "Gordita",
              fontSize: "12px",
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

export default Date
