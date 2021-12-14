import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import '../App.css';

export function Card({ data, boardCallback }: any) {
	const [beenClicked, setBeenClicked] = React.useState(false);

	return (
		<div className="Card" onClick={handleClick}>
			{data.category && (
				<Tooltip title={data.note ? data.note : ''} placement="top">
					<span className="Value">{data.category}</span>
				</Tooltip>
			)}
			{!data.category && !beenClicked && (
				<span className="Value">{data.amount}</span>
			)}
		</div>
	);

	function handleClick() {
		if (!beenClicked && !data.category) {
			boardCallback(data.question, data.answer, data.img);
			setBeenClicked(true);
		}
	}
}
