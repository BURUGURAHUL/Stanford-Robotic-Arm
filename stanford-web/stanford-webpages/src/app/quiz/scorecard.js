// ScoreCard.js
import React from 'react';
 
const ScoreCard = ({ quizResult, questions, name }) => {
    const passPercentage = 60;
 
    const percentage = (quizResult.score / (questions.length * 5)) * 100;
    const status = percentage >= passPercentage ? 'Pass' : 'Fail';
 
    return (
        <>
            <div className='rounded-xl p-4 md:p-6 bg-[#263238] shadow-lg'>
                <h2>Hello, {name}! Here is your result analysis:</h2>
                <table className='table mt-2'>
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
                            <td className='font-bold'>{status}</td>
                        </tr>
                    </tbody>
                </table>
                <div className='mx-auto'>
                <button
                    onClick={() => window.location.reload()}
                    className='m-4 text-white rounded-lg text-lg px-3 py-2 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 bg-[#48C063] duration-300 mt-6'
                >
                    <h1 className='m-0 text-xl'>Try Again 🔁</h1>
                </button>
                </div>
                
            </div>
        </>
    );
};
 
export default ScoreCard;