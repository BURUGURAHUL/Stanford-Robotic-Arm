import React from 'react'
import fig1 from './fig1.jpg'
import Image from 'next/image'

const theory = () => {
  return (
    <div>
      <h1>2. Theory</h1>
      <p>This section explores the theoretical foundation of the Stanford manipulator, including its history, components, and kinematic principles.</p>
      <h2>2.1 History of the Stanford Manipulator</h2>
      <p>The Stanford manipulator, a pioneering robotic arm designed at Stanford University by Victor Scheinman in 1969, revolutionized the field of robotics with its versatile design and advanced kinematics.</p>
      <h2>2.2 Components of the Stanford Manipulator</h2>
      <p>The manipulator consists of:</p>
      <ul>
        <li><b>Rotation Body: </b> Provides the base rotational motion.</li>
        <li><b>Large Arm: </b> Acts as the main structural component for vertical movement.</li>
        <li><b>Extension Arm: </b> Facilitates horizontal extension and retraction.</li>
        <li><b>Wrist: </b> Allows complex orientation adjustments.</li>
        <li><b>End Effector: </b> Performs the manipulative tasks, such as gripping.</li>
      </ul> 

      <p><b>Mechanical Components:</b> Includes the structural parts like arms and joints, providing the physical capability to move and perform tasks.
    <br/><b>Electronic Components:</b> Consist of motors, sensors, and control systems that drive and regulate the manipulator&apos;s movements.</p>
      <h2>2.3 Basic Operational Principles</h2>
      <p>The manipulator has six degrees of freedom, allowing it to move in three translational and three rotational directions.</p>
      <Image src={fig1} width={500} className='mt-3 mx-auto'/>
      <p><b>Forward kinematics</b> involves calculating the position and orientation of the end effector based on given joint parameters. It uses the Denavit-Hartenberg (D-H) parameters to systematically describe the robot&apos;s geometry.</p>
      <br/><p><b>Inverse kinematics</b> determines the joint parameters needed to achieve a desired position and orientation of the end effector. </p>
      <br/><p><b>Control Mechanisms:</b></p>
      <ul>
        <li><b>Resolved Rate Motion Control:</b> A basic control method that adjusts joint velocities to achieve a desired end effector velocity.</li>
        <li><b> Advanced Algorithms:</b> Include optimization techniques like genetic algorithms to enhance trajectory planning and efficiency.</li>
      </ul>
    </div>
  )
}

export default theory
