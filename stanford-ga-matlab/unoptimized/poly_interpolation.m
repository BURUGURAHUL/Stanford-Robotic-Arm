function theta = poly_interpolation(theta_0, theta_f, t, tf)
    a0 = theta_0;
    a1 = 0;
    a2 = (3 / (tf^2)) * (theta_f - theta_0);
    a3 = -(2 / (tf^3)) * (theta_f - theta_0);
    
    theta = a0 + a1 * t + a2 * (t^2) + a3 * (t^3);
    
end
