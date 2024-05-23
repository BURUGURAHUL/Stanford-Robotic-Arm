'use client'
import { useState } from "react";
import Quiz from "./quiz";
 
export default function Home() {
    const [quizStarted, setQuizStarted] = useState(false);
    const [name, setName] = useState('');
 
    return (
        <div className="">
            <h1>Quiz</h1>
 
            {quizStarted ? (
                <Quiz name={name} />
            ) : (
                <>
                    <div className="mb-3 ">
                        <label htmlFor="nameInput"
                            className="text-xl">
                            Enter Your Name:
                        </label>
                        <input
                            type="text"
                            className="border-b-2 border-b border-black px-4 py-2 m-3 "
                            id="nameInput"
                            placeholder="Name"
                            value={name}
                            onChange={(e) =>
                                setName(e.target.value)}
                        />
                    </div>
                    <button
                        onClick={() => setQuizStarted(true)}
                        className="text-white rounded-lg text-lg px-3 py-2 transition ease-in-out delay-150 bg-[#263238] hover:-translate-y-1 hover:scale-110 hover:bg-[#48C063] duration-300"
                        // Disable button if name is empty or whitespace
                        disabled={!name.trim()}
                    >
                        Start Quiz
                    </button>
                </>
            )}
        </div>
    );
}