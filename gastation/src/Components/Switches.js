import Switch from '@mui/material/Switch'
import React, {useState, useEffect} from 'react';

export default function ControlledSwitches({state, number}) {
	const [checked, setChecked] = useState(state)
  
	const handleChange = (event) => {
	  setChecked(event.target.checked);
      fetch('/sendNotif', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            number
          }),
      })
	  console.log(number)
	};
  
	return (
	  <Switch
		checked={checked}
		onChange={handleChange}
		inputProps={{ 'aria-label': 'controlled' }}
	  />
	);
  }