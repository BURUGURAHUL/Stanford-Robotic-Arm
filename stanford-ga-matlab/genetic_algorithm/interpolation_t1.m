function theta = interpolation_t1(theta_10,theta_1f,t,tf)

        a10 = theta_10;
        a11 = 0;
        a12 = (3 / (tf^2)) * (theta_1f - theta_10);
        a13 = -(2 / (tf^3)) * (theta_1f - theta_10);
    
        theta = a10 + a11* t + a12 * (t^2) + a13 * (t^3);


end