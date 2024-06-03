clc;
clear all;

px0=-1;
py0=1.5;
pz0=0.8;

px1=3;
py1=1;
pz1=1;

% Inverse Kinematics
[theta_10, theta_20, d_30] = inv_kinematics(px0,py0,pz0);
[theta_1f, theta_2f, d_3f] = inv_kinematics(px1,py1,pz1);

tf=2;
t=linspace(0,tf, 100);

for i=1:length(t)
    th_1(i)=poly_interpolation(theta_10,theta_1f,t(i),tf);
    th_2(i)=poly_interpolation(theta_20,theta_2f,t(i),tf);
    d3_poly(i)=poly_interpolation(d_30,d_3f,t(i),tf);
end

end_effector_trajectory = zeros(length(t), 3);

%Forward Kinematics
for i = 1:length(t)
    [o1,o2,o3]=Forward_kine(th_1(i),th_2(i),d3_poly(i));
    end_effector_trajectory(i,1)=o1;
    end_effector_trajectory(i,2)=o2;
    end_effector_trajectory(i,3)=o3;
end

disp(end_effector_trajectory)
%%
% Plot the end effector trajectory
figure;
plot3(end_effector_trajectory(:, 1), end_effector_trajectory(:, 2), end_effector_trajectory(:, 3), 'LineWidth', 2);
xlabel('X');
ylabel('Y');
zlabel('Z');
title('End Effector Trajectory');
grid on;

%% 
% Simulation
out=simulation(th_1,th_2,d3_poly);
%%
%Distance Travelled
L=distance(theta_10,theta_1f,theta_20,theta_2f,d_30,d_3f,tf)
fprintf('Distance Travelled is %d ',L);