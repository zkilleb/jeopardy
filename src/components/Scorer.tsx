import React from 'react';
import '../App.css';
import { ButtonGroup, Button } from '@mui/material';

export function Scorer({ header }: { header: string }) {
	const [score, setScore] = React.useState(0);

	return (
		<div className="Scorer">
			{header}
			<ButtonGroup
				variant="contained"
				aria-label="outlined primary button group"
			>
				<Button onClick={handleDecrement}>-</Button>
				<span className="Score">{score}</span>
				<Button onClick={handleIncrement}>+</Button>
			</ButtonGroup>
		</div>
	);

	function handleIncrement() {
		setScore(score + 10);
	}

	function handleDecrement() {
		setScore(score - 10);
	}
}
