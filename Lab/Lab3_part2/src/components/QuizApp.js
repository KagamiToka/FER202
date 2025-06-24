import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Question from './Question';
import Result from './Result';

const questions = [
    {
        question: "What is the most favorite celebrity in VietNam",
        options:  ["Jack(J97)", "Viruss", "Decao", "Thắng (Ngọt Band)"],
        answer: "Jack(J97)"
    },
    {
        question: "Which planet is known as a 'Như một vì tinh tú'",
        options:  ["Dev", "J97", "Jupiter", "Mars"],
        answer: "Dev"
    },
    {
        question: "What is most influence streammer at VietNam",
        options:  ["DoMiXi", "PewPew", "MisThy", "Hanakoishi"],
        answer: "DoMiXi"
    }
];

function QuizApp() {
    const[currentIndex, setCurrentIndex] = useState(0);
    const[score, setScore] = useState(0);
    const[showResult, setShowResult] = useState(false);

    const handleAnswer = selectOption => {
        const currenQuestion = questions[currentIndex];
        if(selectOption == currenQuestion.answer) {
            setScore(score + 1);
        }

        const nextIndex = currentIndex + 1;
        if(nextIndex < questions.length) {
            setCurrentIndex(nextIndex);
        }else{
            setShowResult(true);
        }
    }

    const handleRestart = () => {
        setCurrentIndex(0);
        setScore(0);
        setShowResult(false);
    }

    return (
        <div>
            <h2>QuizApp</h2>
            {!showResult ? (
                <Question 
                    questionData = {questions[currentIndex]}
                    onAnswer={handleAnswer}
                    currentIndex={currentIndex}
                    total={questions.length}
                />
            ) : (
                <Result score={score} total={questions.length} onRestart={handleRestart}/>
            )}
        </div>
    );
}
export default QuizApp;

