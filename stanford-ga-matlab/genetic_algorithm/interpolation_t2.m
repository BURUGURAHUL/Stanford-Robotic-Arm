function theta_2 = interpolation_t2(theta_20,theta_2f,t,t2,tf)

a20 = (theta_20*(tf^3) - 3*theta_20*(tf^2)*t2 + 3*theta_2f*tf*(t2^2) - theta_2f*(t2^3))/((tf-t2)^3);

a21=(6*(t2*tf)*(theta_20 - theta_2f))/((tf-t2)^3);

a22= -3*(t2+tf)*(theta_20 - theta_2f)/((tf-t2)^3);

a23= 2*(theta_20 - theta_2f)/((tf-t2)^3);

theta_2=a20 + a21*t + a22*(t^2) + a23*(t^3);

end