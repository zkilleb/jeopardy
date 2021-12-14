import React from 'react';
import { board as initBoard, questions, amounts } from '../constants';
import { Card, QuestionCard, ScoreBoard } from '.';

export function Board() {
	const [board, setBoard] = React.useState(initBoard);
	const [questionData, setQuestionData] = React.useState<IQuestion>();
	const [answeringQuestion, setAnsweringQuestion] = React.useState(false);

	React.useEffect(() => {
		setBoard(populateBoard());
	}, []);

	return (
		<div className="Board">
			{answeringQuestion && (
				<QuestionCard
					question={questionData?.question}
					answer={questionData?.answer}
					img={questionData?.img}
				/>
			)}
			{board.map((boardRow, index) => {
				return (
					<div key={index} className="Column">
						{boardRow.map((card, subIndex) => {
							return (
								<Card
									key={`${index}-${subIndex}`}
									boardCallback={boardCallback}
									data={card}
								/>
							);
						})}
					</div>
				);
			})}
			<ScoreBoard />
		</div>
	);

	function populateBoard() {
		let questionIndexes: number[] = [];
		let tempQuestions: ICategory[] = [];

		while (questionIndexes.length < 6) {
			const index = Math.floor(Math.random() * questions.length);
			if (!questionIndexes.includes(index)) {
				questionIndexes.push(index);
				tempQuestions.push(questions[index]);
			}
		}

		let tempBoard = [...initBoard];

		tempBoard.forEach((column, index) => {
			column[0] = {
				category: tempQuestions[index].category,
				note: tempQuestions[index].note,
			};
			column[1] = {
				question: tempQuestions[index].questions[0].question,
				answer: tempQuestions[index].questions[0].answer,
				img: tempQuestions[index].questions[0].img,
				amount: amounts.jeopardy[0],
			};
			column[2] = {
				question: tempQuestions[index].questions[1].question,
				answer: tempQuestions[index].questions[1].answer,
				img: tempQuestions[index].questions[1].img,
				amount: amounts.jeopardy[1],
			};
			column[3] = {
				question: tempQuestions[index].questions[2].question,
				answer: tempQuestions[index].questions[2].answer,
				img: tempQuestions[index].questions[2].img,
				amount: amounts.jeopardy[2],
			};
			column[4] = {
				question: tempQuestions[index].questions[3].question,
				answer: tempQuestions[index].questions[3].answer,
				img: tempQuestions[index].questions[3].img,
				amount: amounts.jeopardy[3],
			};
			column[5] = {
				question: tempQuestions[index].questions[4].question,
				answer: tempQuestions[index].questions[4].answer,
				img: tempQuestions[index].questions[4].img,
				amount: amounts.jeopardy[4],
			};
		});

		return tempBoard;
	}

	function boardCallback(question: string, answer: string, img: any) {
		setAnsweringQuestion(true);
		setQuestionData({ question, answer, img });
		setTimeout(() => setAnsweringQuestion(false), 25000);
	}
}

interface ICategory {
	category: string;
	questions: IQuestion[];
	note?: string;
}

interface IQuestion {
	question: string;
	answer: string;
	img?: any;
}
