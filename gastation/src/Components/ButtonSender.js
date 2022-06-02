import Checkbox from '@mui/material/Checkbox';
import React, {useState, useEffect} from 'react';

export default function ControlledCheckbox({state,numberPhone}) {
  const [checked, setCheckeded] = useState(state);

  const handleChange = (event) => {
    setCheckeded(event.target.checked);

    fetch('/sendNotif', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            numberPhone
        }),
    })
    console.log(numberPhone)
  };

  return (
    <Checkbox
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
  );
}