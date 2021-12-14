import './App.css';
import jeopardy from './images/jeopardy.svg';
import { Board } from './components';

function App() {
	return (
		<div className="App">
			<img alt="jeopardy-logo" src={jeopardy} width={200} height={100} />
			<Board />
		</div>
	);
}

export default App;
