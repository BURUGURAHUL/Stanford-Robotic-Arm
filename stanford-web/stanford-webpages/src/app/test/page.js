'use client'
import { useState } from "react";
import Quiz from "./quiz";
 
export default function Home() {
    const [quizStarted, setQuizStarted] = useState(false);
    const [name, setName] = useState('');
 
    return (
        <div className="">
            <h1>Test</h1>
 
            {quizStarted ? (
                <Quiz name={name} />
            ) : (
                <>
                    <div className="mb-3">
                        <label htmlFor="nameInput"
                            className="form-label">
                            Enter Your Name:
                        </label>
                        <input
                            type="text"
                            className="border-2 border-black"
                            id="nameInput"
                            value={name}
                            onChange={(e) =>
                                setName(e.target.value)}
                        />
                    </div>
                    <button
                        onClick={() => setQuizStarted(true)}
                        className="btn btn-primary"
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