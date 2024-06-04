import Image from "next/image";
import KatexSpan from "./components/KatexSpan";
export default function Home() {
  const matrix = `$$ \\left[\\begin{array} {rrr} 3.381563 & 3.389113 \\\\ 4.527875 & 5.854178 \\\\ 2.655682 & 4.411995 \\\\ \\end{array}\\right] $$`;
  return (
    <div>
      <h1>1. Objective</h1>
      <p>
        The optimization of robot manipulator&apos;s trajectory has become a
        popular topic in academic and industrial fields. We have implemented a
        method for minimizing the moving distance of robot manipulators. The
        inverse kinematics model is established with Denavit-Hartenberg method.{" "}
      </p>
      <p>
        Base on the initial posture matrix, the inverse kinematics model is used
        to find the initial state of each joint. In accordance with the given
        beginning moment, cubic polynomial interpolation is applied to each
        joint variable and the positive kinematic model is used to calculate the
        moving distance of end effector. <br />
        <br />
        Genetic algorithm is used to optimize the sequential order of each joint
        and the time difference between different starting time of joints.
        Numerical applications involving a Stanford manipulator are presented.
        This project delves into the intricate workings of the Stanford
        manipulator, aiming to explore its kinematic models, control algorithms,
        and applications.
      </p>
      <h2>1.1 Brief Overview of the Stanford Manipulator</h2>
      
      <div className="flex justify-center">
        <div>
        <p>
        The Stanford manipulator is a robotic arm consisting of six degrees of
        freedom, making it highly flexible and capable of complex movements.{" "}
      </p>
          <br />
          <p>Parts:</p>
          <ul>
            <li>A rotation body</li>
            <li>A large arm</li>
            <li>An extension arm</li>
            <li>A wrist</li>
            <li>An end effector</li>
          </ul>
          <p>
          From bottom to top, the six kinematics 
parameters of Manipulator&apos;s joints are	θ<sub>1</sub>, θ<sub>2</sub>, d<sub>3</sub>, θ<sub>4</sub>, θ<sub>5</sub>, θ<sub>6</sub>.
            <br />
            Understanding the Stanford manipulator&apos;s design and
            functionality is crucial for advancing robotic applications in
            industrial, medical, and research settings. This project seeks to
            optimize the manipulator&apos;s trajectory using advanced
            algorithms, enhancing its efficiency and precision.
          </p>
        </div>
        <Image src="/stanford.png" width={400} height={300}/>
      </div>
    </div>
  );
}
