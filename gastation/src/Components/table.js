import './table.css'
import React, {useState, useEffect} from 'react';
import ControlledSwitches from "./Switches.js"
import ControlledCheckbox from './ButtonSender';

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
				<ControlledSwitches state= {val.hasGas} address= {val.address} />
			</td>
			<td>{val.paymentDate}</td>
			<td>
				<ControlledCheckbox state= {val.hasNotifications} numberPhone= {val.number} />
				{console.log(val.number)}
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

