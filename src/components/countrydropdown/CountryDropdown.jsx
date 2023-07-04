// import React, { useState, useMemo } from 'react'
// import Select from 'react-select'
// import React, { useState } from 'react';
// import DateTimePicker from 'react-datetime-picker';
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

  const Example = () => {
    const [startDate, setStartDate] = useState(new Date().getDay());
    return (
      <DatePicker className=" outline-none" placeholderText="Friday" selected={startDate} onChange={(date) => setStartDate(date)} />
    );
  };
export default Example;