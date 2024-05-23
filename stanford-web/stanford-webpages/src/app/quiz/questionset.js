// QuestionSet.js
export const quiz = {
    questions: [
        {
            id: 1,
            question: 'What is a key feature of the Stanford robotic manipulator that distinguishes it from other early robotic arms?',
            answers: ['Its use of hydraulic actuators',
                'Its 7 degrees of freedom',
                'Its revolute and prismatic joint combination',
                'Its voice recognition system'],
            correctAnswer: 'Its revolute and prismatic joint combination',
        },
        {
            id: 2,
            question: 'The Stanford robotic manipulator was one of the first robots to be controlled by:',
            answers: ['Analog circuits',
                'Digital computers',
                'Remote control',
                'Mechanical levers'],
            correctAnswer: 'Digital computers',
        },
 
        {
            id: 3,
            question: `What type of joint configuration does the Stanford robotic manipulator utilize?`,
            answers: ['Cartesian', 'Cylindrical', 'Spherical', 'Articulated (Revolute and Prismatic)'],
            correctAnswer: 'Articulated (Revolute and Prismatic)',
        },
        {
            id: 4,
            question: 'The Stanford robotic manipulator contributed to the development of which subsequent robotic system?',
            answers: ['Unimate', 'PUMA (Programmable Universal Machine for Assembly)',
                'Baxter', 'ASIMO'],
            correctAnswer: 'PUMA (Programmable Universal Machine for Assembly)',
        },
        {
            id: 5,
            question: 'How many degrees of freedom does the Stanford robotic manipulator have?',
            answers: ['4', '5',
                '6', '7'],
            correctAnswer: '6',
        },
    ],
};