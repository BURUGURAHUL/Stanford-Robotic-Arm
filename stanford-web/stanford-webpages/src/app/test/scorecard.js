// ScoreCard.js
import React from 'react';
 
const ScoreCard = ({ quizResult, questions, name }) => {
    const passPercentage = 60;
 
    const percentage = (quizResult.score / (questions.length * 5)) * 100;
    const status = percentage >= passPercentage ? 'Pass' : 'Fail';
 
    return (
        <>
            <div className='card p-4'>
                <h3>Hello, {name}. Here is your Result Analysis</h3>
                <table className='table'>
                    <tbody>
                        <tr>
                            <td>Total Questions:</td>
                            <td>{questions.length}</td>
                        </tr>
                        <tr>
                            <td>Total Score:</td>
                            <td>{quizResult.score}</td>
                        </tr>
                        <tr>
                            <td>Correct Answers:</td>
                            <td>{quizResult.correctAnswers}</td>
                        </tr>
                        <tr>
                            <td>Wrong Answers:</td>
                            <td>{quizResult.wrongAnswers}</td>
                        </tr>
                        <tr>
                            <td>Percentage:</td>
                            <td>{percentage}%</td>
                        </tr>
                        <tr>
                            <td>Status:</td>
                            <td>{status}</td>
                        </tr>
                    </tbody>
                </table>
                <button
                    onClick={() => window.location.reload()}
                    className='btn btn-primary mt-3'
                >
                    Restart
                </button>
            </div>
        </>
    );
};
 
export default ScoreCard;