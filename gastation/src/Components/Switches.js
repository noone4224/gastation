import Switch from '@mui/material/Switch'
import React, {useState, useEffect} from 'react';

export default function ControlledSwitches({state, address}) {
	const [checked, setChecked] = useState(state)
  
	const handleChange = (event) => {
	  setChecked(event.target.checked);

      fetch('/turnOffGas', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            address
          }),
      })
	
	  console.log(address)
	};

	return (
	  <Switch
		checked={checked}
		onChange={handleChange}
		inputProps={{ 'aria-label': 'controlled' }}
	  />
	);
  }