# 🤖 Stanford Robotic Manipulator
Welcome to the Stanford Robotic Manipulator project! This repository contains various files and directories to simulate, optimize, and visualize the Stanford robotic manipulator using MATLAB, Blender, and web technologies!

## Tech Stack
[![tech Stack](https://skillicons.dev/icons?i=matlab,python,nextjs,js,tailwindcss,blender,threejs,figma,vercel)](https://skillicons.dev)

## Contributors 🤝
<table style="border: none;">
<tr>
<td align="center" width="200"><pre><a href="https://github.com/Manasha-1204Manasha-1204"><img src="https://avatars.githubusercontent.com/u/121673101?v=4" width="200" alt="Profile" /><br><sub>@Manasha-1204</sub></a></pre></td>
<td align="center" width="200"><pre><a href="https://github.com/amri-tah"><img src="https://avatars.githubusercontent.com/u/111682039?v=4" width="200" alt="Profile" /><br><sub>@amri-tah</sub></a></pre></td>
<td align="center" width="200"><pre><a href="https://github.com/sudheerkumarchowdary"><img src="https://avatars.githubusercontent.com/u/98307666?v=4" width="200" alt="Profile" /><br><sub>@sudheerkumarchowdary</sub></a>
<td align="center" width="200"><pre><a href="https://github.com/BURUGURAHUL"><img src="https://avatars.githubusercontent.com/u/121683096?v=4" width="200" alt="Profile" /><br><sub>@BURUGURAHUL</sub></a></pre></td>
</tr>
</table>

## 📂 Directory Structure

### /stanford-ga-matlab/
This directory contains MATLAB scripts for simulating and optimizing the Stanford manipulator using Genetic Algorithms (GA).

- **genetic_algorithm/**
  - `Forward_kine.m` - Script for forward kinematics.
  - `GA.m` - Main genetic algorithm script.
  - `crossover.m` - Crossover function for GA.
  - `decode.m` - Decoding function for GA.
  - `distance.m` - Distance calculation script.
  - `fitness.m` - Fitness function for GA.
  - `initialization.m` - Initialization function for GA.
  - `interpolation_t1.m` - Interpolation for theta1.
  - `interpolation_t2.m` - Interpolation for theta2.
  - `interpolation_t3.m` - Interpolation for theta3.
  - `inv_kinematics.m` - Inverse kinematics script.
  - `main.m` - Main script to run GA.
  - `mutation.m` - Mutation function for GA.
  - `selection.m` - Selection function for GA.
  - `simulation.m` - Simulation script for GA.

- **unoptimized/**
  - `Forward_kine.m` - Unoptimized forward kinematics script.
  - `distance.m` - Unoptimized distance calculation script.
  - `inv_kinematics.m` - Unoptimized inverse kinematics script.
  - `main.m` - Unoptimized main script.
  - `poly_interpolation.m` - Polynomial interpolation script.
  - `simulation.m` - Unoptimized simulation script.

- `Simulation_Stanford_robot.m` - Main simulation script for the Stanford robot.

### /stanford-simulation-blender/
This directory contains files for simulating the Stanford manipulator using Blender.

- **css/** - CSS files for Blender simulation interface.
- **js/** - JavaScript files for Blender simulation interface.
- **models/** - 3D models for Blender simulation.
- `index.html` - Main HTML file for Blender simulation.

### /stanford-web/
This directory contains web-related files to visualize and interact with the Stanford manipulator.

- **stanford-webpages/** - Webpages with animations and flowcharts.
- `package-lock.json` - Dependency lock file.
- `package.json` - Node.js package file.

### /stanford-rbtoolbox.ipynb
Jupyter Notebook with the implementation and analysis of the Stanford manipulator using Robotics Toolbox on Python.

## 🖼️ MATLAB Simulation 
1. **Unoptimised path**

![unoptimized](https://github.com/BURUGURAHUL/Stanford-Robotic-Arm/assets/111682039/ee8e50de-39b6-4fbb-99df-073c89cceeaf)

2. **Optimised path**

![optimized](https://github.com/BURUGURAHUL/Stanford-Robotic-Arm/assets/111682039/87e5b612-7c55-466e-9609-04e83b0c35ae)

## ✅ Screenshots 

## 🛠️ Usage

### MATLAB Simulation

To run the MATLAB simulation, navigate to the `stanford-ga-matlab` directory and execute the `Simulation_Stanford_robot.m` script in MATLAB.

### Blender Simulation

To view the simulation in Blender, open the `index.html` file in the `stanford-simulation-blender` directory in your browser.

### Web Visualization

To access the web visualization, navigate to the `stanford-web/stanford-webpages` directory, and run `npm install` and `npm run dev` on the terminal.


  
## 📜 License

This project is licensed under the MIT License.

## 🙌 Acknowledgments

Special thanks to all the contributors who made this project possible.

---

Feel free to explore the directories and scripts to gain a deeper understanding of the Stanford robotic manipulator and its simulations!

