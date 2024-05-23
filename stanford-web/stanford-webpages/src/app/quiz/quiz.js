// Quiz.js
import React, { useState } from 'react';
import { quiz } from './questionset.js';
import ScoreCard from './scorecard.js';
 
const Quiz = ({ name }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [answerChecked, setAnswerChecked] = useState(false);
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
    const [showResults, setShowResults] = useState(false);
    const [quizResult, setQuizResult] = useState({
        score: 0,
        correctAnswers: 0,
        wrongAnswers: 0,
    });
 
    const { questions } = quiz;
    const { question, answers, correctAnswer } = 
                                                questions[currentQuestionIndex];
 
    const onAnswerSelected = (answer, idx) => {
        setSelectedAnswerIndex(idx);
        setSelectedAnswer(answer);
        setAnswerChecked(true);
    };
 
    const handleNextQuestion = () => {
        if (selectedAnswer === correctAnswer) {
            setQuizResult((prev) => ({
                ...prev,
                score: prev.score + 5,
                correctAnswers: prev.correctAnswers + 1,
            }));
        } else {
            setQuizResult((prev) => ({
                ...prev,
                wrongAnswers: prev.wrongAnswers + 1,
            }));
        }
        if (currentQuestionIndex !== questions.length - 1) {
            setCurrentQuestionIndex((prev) => prev + 1);
        } else {
            setShowResults(true);
        }
        setSelectedAnswer('');
        setSelectedAnswerIndex(null);
        setAnswerChecked(false);
    };
 
    return (
        <div className='mt-5 text-white'>
 
            <div>
                {!showResults ? (
                    <div className='rounded-xl p-4 md:p-6 bg-[#263238] shadow-lg'>
                        Question {currentQuestionIndex + 1}/{questions.length}
                        <h1 className='mt-0 text-xl md:text-2xl'>{question}</h1>
                            {answers.map((answer, idx) => (
                                <p
                                    key={idx}
                                    onClick={() => onAnswerSelected(answer,idx)}
                                    className={
                                        (selectedAnswerIndex === 
                                                idx ? 'bg-[#48C063] text-bold' : '') +
                                        'cursor-pointer p-2 rounded-md'
                                    }
                                >
                                    {answer}
                                </p>
                            ))}
                        
                        <div className='flex justify-end m-3'>
                            
                            <button
                                onClick={handleNextQuestion}
                                className='text-white rounded-lg text-lg px-3 py-2 transition ease-in-out delay-150 bg-[#263238] hover:-translate-y-1 hover:scale-110 hover:bg-[#48C063] duration-300'
                                disabled={!answerChecked}
                            >
                                <h1 className='text-xl m-0'>{currentQuestionIndex === questions.length - 1 ? 'Submit ✅' : 'Next Question ⏭️'}</h1>
                            </button>
                        </div>
                    </div>
                ) : (
                    <ScoreCard
                        quizResult={quizResult}
                        questions={questions}
                        name={name}
                    />
                )}
            </div>
        </div>
    );
};
 
export default Quiz;