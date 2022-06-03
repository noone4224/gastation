import './table.css'
import React, {useState, useEffect} from 'react';
import ControlledSwitches from "./Switches.js"
import ControlledCheckbox from './ButtonSender';

function TableValues() {

	const [data, setData] = useState([{}])
	useEffect(() => {
		fetch("https://nifty-inn-287712.rj.r.appspot.com/clients", {mode:'cors'}).then(
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
		<th>Turn Off Gas</th>
		<th>Payment Date</th>
		<th>Send Message</th>
		</tr>
		{data.map((val, key) => {
		return (
			<tr key={key}>
			<td>{val.name}</td>
			<td>{val.address}</td>
			<td>{val.rfc}</td>
			<td>
				<ControlledSwitches state= {val.hasGas} address= {val.address} rfc={val.rfc} />
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

