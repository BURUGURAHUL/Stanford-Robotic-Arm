import React from "react";
import KatexSpan from "../components/KatexSpan";
import Image from "next/image";
import sdh from "../components/images/sdh.png";

const rbtoolbox = () => {
  const matrix1 = `$$ \\left[\\begin{array} {rrrr} nx & ox & ax & px \\\\ ny & oy & ay & py \\\\ nz & oz & az & pz \\\\ 0 & 0 & 0 & 1 \\\\ \\end{array}\\right] $$`;
  const matrix2 = `$$ \\left[\\begin{array} {rrrr}
    \\cos \\theta_n & -\\sin \\theta_n & 0 & a_n \\\\
    \\sin \\theta_n \\cos \\alpha_n & \\cos \\theta_n \\cos \\alpha_n & -\\sin \\alpha_n & -d_n \\sin \\alpha_n \\\\
    \\sin \\theta_n \\sin \\alpha_n & \\cos \\theta_n \\sin \\alpha_n & \\cos \\alpha_n & d_n \\cos \\alpha_n \\\\
    0 & 0 & 0 & 1 \\\\
    \\end{array}\\right] $$`;
  const matrix3 = `$$ \\left[\\begin{array} {rrrr}
      \\cos \\theta_n & -\\sin \\theta_n & \\sin \\theta_n \\sin \\alpha_n & a_n \\cos \\alpha_n \\\\
      \\sin \\theta_n & \\cos \\theta_n & -\\cos \\theta_n \\sin \\alpha_n & a_n \\sin \\theta_n \\\\
      0 & \\sin \\alpha_n & \\cos \\alpha_n & d_n \\\\
      0 & 0 & 0 & 1 \\\\
      \\end{array}\\right] $$`;
  return (
    <div>
      <h1>3. Robotics Toolbox for Kinematics</h1>
      <p>
        The Robotic Toolbox in MATLAB is a comprehensive suite of functions and
        classes designed for simulating and analyzing the kinematics and
        dynamics of robotic manipulators. It provides tools for:
      </p>
      <ul>
        <li>
          Defining robot models: Using D-H parameters to specify the
          robot&apos;s geometry.
        </li>
        <li>
          Simulating movements: Visualizing and verifying kinematic models and
          trajectories.
        </li>
        <li>
          Solving kinematic equations: Both forward and inverse kinematics can
          be computed efficiently.
        </li>
        <li>
          Trajectory planning: Designing and optimizing paths for the
          manipulator to follow.
        </li>
      </ul>
      <p>
        The Stanford manipulator consists five rotary joints and one prismatic
        (linear) joint. Each joint represents one degree of freedom. The
        kinematic parameters of the joints are θ<sub>1</sub>,θ<sub>2</sub>,d
        <sub>3</sub>,θ<sub>4</sub>,θ<sub>5</sub>,θ<sub>6</sub>.
      </p>
      <p>
        <br />
        The matrix which describes the end effector&apos;s position and attitude
        in reference coordinate system is expressed as follow:
      </p>
      <KatexSpan text={matrix1} />
      <p>
        Where n, o, a is the end effector&apos;s attitude, p is the end
        effector&apos; position, px , py , pz is the end effector&apos;s
        coordinate in the datum reference coordinate system.
      </p>
      <br />
      <p>
        0 shows the relationship of the adjacent coordinate system n-1 and n.
        Firstly, the x<sub>n-1</sub> axis is rotated by 0<sub>n</sub> angle
        around the z<sub>n-1</sub> axis. Secondly, the x<sub>n-1</sub> axis
        moves dn distance along the z<sub>n-1</sub> axis. Thirdly, the z
        <sub>n-1</sub> axis moves an distance along the rotating x<sub>n-1</sub>
        axis, that is, x<sub>n</sub> axis. Finally, the z<sub>n-1</sub> axis is
        twisted by α<sub>n</sub> angle around the x<sub>n</sub> axis. As a
        result, the Matrix A is presented as follows:
      </p>
      <KatexSpan
        text={String.raw`$$A_n = Rz(θ_n)×T(a_n,d_n)×Rx(α_n)
$$`}
      />
      <KatexSpan text={matrix2} />
      <KatexSpan text={matrix3} />
      <p>Standard DH Parameters:</p>
      <Image src={sdh} width={700}/>
      
    </div>
  );
};

export default rbtoolbox;
