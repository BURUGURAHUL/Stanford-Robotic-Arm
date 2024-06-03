% Genetic Algorithm for Trajectory Optimization
clc;
clear all;

px0=-1;
py0=1.5;
pz0=0.8;

px1=3;
py1=1;
pz1=1;

d2=0.154;

% inv_kinematics 
[theta_10, theta_20, d_30] = inv_kinematics(px0, py0, pz0);
[theta_1f, theta_2f, d_3f] = inv_kinematics(px1, py1, pz1);

tf = 2;

%[t2,t3]=GA(theta_10,theta_1f,theta_20,theta_2f,d_30,d_3f,tf);
t2=0.88;
t3=1.01;

%%
t = linspace(0, tf, 100);
end_effector_trajectory = zeros(length(t), 3);

if(t2<t3)
    for i = 1:length(t)
        if (0 <= t(i) && t(i) < t2)
            th__1 = interpolation_t1(theta_10, theta_1f, t(i), tf);
            th__2 = theta_20;
            d__3 = d_30;
        elseif (t2 <= t(i) && t(i) < t3)
            th__1 = interpolation_t1(theta_10, theta_1f, t(i), tf);
            th__2 = interpolation_t2(theta_20, theta_2f, t(i), t2, tf);
            d__3 = d_30;
        else
            th__1 = interpolation_t1(theta_10, theta_1f, t(i), tf);
            th__2 = interpolation_t2(theta_20, theta_2f, t(i), t2, tf);
            d__3 = interpolation_t3(d_30, d_3f, t(i), t3, tf);
        end
        th_1(i)=th__1;
        th_2(i)=th__2;
        d_3(i)=d__3;
        [px_t,py_t,pz_t]=Forward_kine(th__1,th__2,d__3);

        end_effector_trajectory(i, :) = [px_t, py_t, pz_t];
    end

else

    for i = 1:length(t)
        if (0 <= t(i) && t(i) < t3)
            th__1 = interpolation_t1(theta_10, theta_1f, t(i), tf);
            th__2 = theta_20;
            d__3 = d_30;

        elseif (t3 <= t(i) && t(i) < t2)
            th__1 = interpolation_t1(theta_10, theta_1f, t(i), tf);
            th__2 = theta_20;
            d__3 = interpolation_t3(d_30, d_3f, t(i), t3, tf);
        else
            th__1 = interpolation_t1(theta_10, theta_1f, t(i), tf);
            th__2 = interpolation_t2(theta_20, theta_2f, t(i), t2, tf);
            d__3 = interpolation_t3(d_30, d_3f, t(i), t3, tf);
        end
        th_1(i)=th__1;
        th_2(i)=th__2;
        d_3(i)=d__3;
        [px_t,py_t,pz_t]=Forward_kine(th__1,th__2,d__3);

        end_effector_trajectory(i, :) = [px_t, py_t, pz_t];
    end

end

disp(end_effector_trajectory);
%%
%Plot The Trajectory
figure;
plot3(end_effector_trajectory(:, 1), end_effector_trajectory(:, 2), end_effector_trajectory(:, 3), 'LineWidth', 2);
xlabel('X');
ylabel('Y');
zlabel('Z');
title('End Effector Trajectory');
grid on;


%%
out=simulation(th_1,th_2,d_3)

%%
%Calculate the distance travelled by end effector
L = distance(theta_10,theta_1f,theta_20,theta_2f,d_30,d_3f,t2,t3,tf);
fprintf('The optimized distance is %d',L)