import react from "react"
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateRangeCalendar } from "@mui/x-date-pickers-pro";



const DateRangeComponent = () => {
    return (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DateRangeCalendar']}>
                <DateRangeCalendar />
              </DemoContainer>
            </LocalizationProvider>
    )
}

export default DateRangeComponent;