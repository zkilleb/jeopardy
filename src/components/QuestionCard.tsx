import React from 'react';
import '../App.css';

export function QuestionCard({ question, answer, img }: IQuestion) {
	const [isQuestion, setIsQuestion] = React.useState(true);

	React.useEffect(() => {
		setTimeout(() => setIsQuestion(false), 15000);
	}, []);

	return (
		<div className="Answer-Card" onClick={handleClick}>
			<span className="Value">{isQuestion ? question : answer}</span>
			<div className="Image">
				{img && isQuestion && (
					<img
						width="500"
						height="500"
						alt={'Question'}
						src={require(`../images/${img}`).default}
					/>
				)}
			</div>
		</div>
	);

	function handleClick() {
		if (isQuestion) setIsQuestion(false);
	}
}

interface IQuestion {
	question?: string;
	answer?: string;
	img?: any;
}
