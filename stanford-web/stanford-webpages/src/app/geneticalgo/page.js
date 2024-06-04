import React from "react";
import KatexSpan from "../components/KatexSpan";
import Image from "next/image";
import ga from "../components/images/gaflow.png";

const GeneticAlgo = () => {
  return (
    <div>
      <h1>4. Genetic Algorithm</h1>
      <p>
        Genetic algorithm is used to optimize the trajectory of a Stanford
        manipulator. The objective is to minimize the movement distance of the
        manipulator&apos;s end effector by optimizing the sequence and timing of
        joint movements.
      </p>
      <p>
        The inverse kinematics model is established using the Denavit-Hartenberg
        method, which translates the manipulator&apos;s initial posture into the
        joint states needed to reach the desired end effector position.
      </p>

      <div className="flex justify-center gap-5 my-5 text-center">
        <div>
          <p>Unoptimized Path:</p>
          <Image src="/unoptimized.gif" width={600} height={600}/>
        {/* <video width="500" autoPlay loop>
        <source src="./unoptimized.mp4" type="video/mp4"  />
        Your browser does not support the video tag.
      </video> */}
        </div>
      <div>
        <p>Optimized Path:</p>
        <Image src="/optimized.gif" width={600} height={600}/>
      {/* <video width="500" autoPlay loop>
        <source src="./optimized.mp4" type="video/mp4"  />
        Your browser does not support the video tag.
      </video> */}
      </div>

      
      </div>
      <h2>4.1 Trajectory Planning</h2>
      <p>
        To plan the trajectory, cubic polynomial interpolation is applied to
        each joint variable. This interpolation ensures smooth transitions by
        maintaining continuity in position, velocity, and acceleration, which
        reduces mechanical stress and ensures efficient movement. The end
        effector&apos;s path is computed using the positive kinematic model based on
        the given starting conditions.
      </p>
      <h2>4.2 Genetic Algorithm Components</h2>
      <Image src={ga} width={500} className="mx-auto"/>
      <p>
        <b>Initialization:</b>
      </p>
      <ul>
        <li>Randomly generate the initial population of solutions.</li>
        <li>
          Each individual in the population represents a possible set of middle
          moments tm1 and tm2, encoded as a binary string.
        </li>
      </ul>

      <h3>Initialization Function:</h3>
      <pre>
        <code>
          {`
Function initialization(pop_size, chromo_size)
Input: 
    int pop_size; 
    int chromo_size; 
    int array[2] pop(pop_size, chromo_size); 
Output: 
    for i = 1 to pop_size 
        for j = 1 to 2 × chromo_size 
            pop(i, j) = round(rand); 
        end for 
    end for 
end Function
          `}
        </code>
      </pre>

      <p>
        <b>Fitness Function:</b>
      </p>
      <ul>
        <li>Calculate the fitness of each individual.</li>
        <li>
          The fitness value is based on the distance L of the end effector&apos;s
          movement, where smaller distances are preferred.
        </li>
        <li>Convert binary strings to decimal to determine tm1 and tm2.</li>
      </ul>

      <h3>Fitness Calculation Function:</h3>
      <pre classname="python-code">
        <code>
          {`
Function fitness(pop_size, chromo_size)
Input: 
    int pop_size; 
    int chromo_size; 
    int array[2] pop(pop_size, chromo_size); 
    double array t2(pop_size); 
    double array t3(pop_size); 
    double array fitness_value(pop_size); 
Output: 
    for i = 1 to pop_size 
        for j = 1 to chromo_size 
            if pop(i, j) == 1 
                t2(i) = t2(i) + 2^(chromo_size - j); 
            end if 
        end for 
        for j = chromo_size + 1 to 2 × chromo_size 
            if pop(i, j) == 1 
                t3(i) = t3(i) + 2^(2 × chromo_size - j); 
            end if 
        end for 
        t2(i) = t2(i) / (2^chromo_size); 
        t3(i) = t3(i) / (2^chromo_size); 
        fitness_value(i) = 1 / L(t2(i), t3(i)); 
    end for 
end Function
          `}
        </code>
      </pre>

      <p>
        <b>Selection:</b>
      </p>
      <ul>
        <li>Rank individuals based on their fitness.</li>
        <li>
          Select individuals for reproduction, favoring those with better
          fitness.
        </li>
      </ul>

      <p>
        <b>Crossover:</b>
      </p>
      <ul>
        <li>
          Combine pairs of individuals to produce offspring, sharing
          characteristics of both parents.
        </li>
        <li>
          Use a crossover rate to determine how many offspring to produce.
        </li>
      </ul>

      <p>
        <b>Mutation:</b>
      </p>
      <ul>
        <li>
          Introduce random changes to some individuals to maintain genetic
          diversity.
        </li>
        <li>Use a mutation rate to control the frequency of these changes.</li>
      </ul>

      <p>
        <b>Iteration:</b>
      </p>
      <ul>
        <li>
          Repeat the process for a number of generations to evolve better
          solutions.
        </li>
      </ul>
      <p>
        <b>
          The goal is to minimize the movement distance L of the end effector by
          finding optimal values for t<sub>2</sub> and t<sub>3</sub>
        </b>
      </p>
      <h2>
        Formulas for Calculating L(t<sub>2</sub>, t<sub>3</sub>){" "}
      </h2>
      <p>
        The calculation of the distance L(t<sub>2</sub>, t<sub>3</sub>) involves
        piecewise functions based on the ranges of t:
      </p>

      <p>
        <KatexSpan text={String.raw`$$ When \ 0 < t \leq t_2:$$`} />
        <KatexSpan
          text={String.raw`$$L = \int_{0}^{t_2} (\dot{x}(t))^2 + (\dot{y}(t))^2 + (\dot{z}(t))^2 \, dt$$`}
        />
        <KatexSpan text={String.raw`$$ When \ t_2 < t \leq t_3:$$`} />
        <KatexSpan
          text={String.raw`$$L = \int_{t_2}^{t_3} (\dot{x}(t))^2 + (\dot{y}(t))^2 + (\dot{z}(t))^2 \, dt$$`}
        />
        <KatexSpan text={String.raw`$$ When \ t_3 < t \leq t_f:$$`} />
        <KatexSpan
          text={String.raw`$$L = \int_{t_3}^{t_f} (\dot{x}(t))^2 + (\dot{y}(t))^2 + (\dot{z}(t))^2 \, dt$$`}
        />
        Where t<sub>f</sub> is the final time when the end effector reaches the
        target position. These formulas represent the Euclidean distance covered
        by the end effector in each segment of its movement.
      </p>

      
    </div>
  );
};

export default GeneticAlgo;
