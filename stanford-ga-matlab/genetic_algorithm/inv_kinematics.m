function [theta_1,theta_2,d_3] = inv_kinematics(px,py,pz)

d2=0.154;
theta_1 = atan2(py, px) - atan2(d2, sqrt(px^2 + py^2 - d2^2));
theta_2=atan2((cos(theta_1)*px+sin(theta_1)*py),pz);
d_3=sin(theta_2)*((cos(theta_1)*px+sin(theta_1)*py)) + cos(theta_2)*pz;

end
