import './table.css';
import Switch from '@mui/material/Switch'
import React, {useState, useEffect, useReducer} from 'react';
import ControlledSwitches from "./Switches.js"

function TableValues() {

	const [data, setData] = useState([{}])
	useEffect(() => {
		fetch("/clients").then(
			res => res.json()
		).then(
			
			data => {
				setData(data.clients)
				console.log(data)
			}
		)
	}, [])
   
return (
	<body>
	<div className="App">
	<table>
		<tr>
		<th>Name</th>
		<th>Adress</th>
		<th>RFC</th>
		<th>Has Gas</th>
		<th>Payment Date</th>
		<th>Has Notifications</th>
		</tr>
		{data.map((val, key) => {
		return (
			<tr key={key}>
			<td>{val.name}</td>
			<td>{val.address}</td>
			<td>{val.rfc}</td>
			<td>
				<ControlledSwitches state= {val.hasGas} address = {val.address} gasNoti = {false}/>
			</td>
			<td>{val.paymentDate}</td>
			<td>
				<ControlledSwitches state= {val.hasNotifications} number = {val.number} gasNoti = {true}/>
			</td>
			</tr>
		)
		})}
	</table>
	</div>
	</body>
);
}


export default TableValues;

