import Switch from '@mui/material/Switch'
import React, {useState, useEffect} from 'react';

export default function ControlledSwitches({state, address, rfc, number}) {
	const [checked, setChecked] = useState(state)
  
	const handleChange = (event) => {
	  setChecked(event.target.checked);

      fetch('https://nifty-inn-287712.rj.r.appspot.com/turnOffGas', {
		  mode: 'cors',
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
			rfc,
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