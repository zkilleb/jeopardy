import '../App.css';
import { Scorer } from './Scorer';

export function ScoreBoard() {
	return (
		<div className="Score-Board">
			<Scorer header="Player 1" />
			<Scorer header="Player 2" />
			<Scorer header="Player 3" />
		</div>
	);
}
