function L = distance(theta_10,theta_1f,theta_20,theta_2f,d_30,d_3f,tf)
    
    d2=0.154;
    a10 = theta_10;
    a11 = 0;
    a12 = (3 / (tf^2)) * (theta_1f - theta_10);
    a13 = -(2 / (tf^3)) * (theta_1f - theta_10);
    
    a20 = theta_20;
    a21 = 0;
    a22 = (3 / (tf^2)) * (theta_2f - theta_20);
    a23 = -(2 / (tf^3)) * (theta_2f - theta_20);

    a30 = d_30;
    a31 = 0;
    a32 = (3 / (tf^2)) * (d_3f - d_30);
    a33 = -(2 / (tf^3)) * (d_3f - d_30);


    syms t
    
    f1 = a10 + a11 * t + a12 * (t^2) + a13 * (t^3);

    f2=a20 + a21 * t + a22 * (t^2) + a23 * (t^3);

    f3=a30 + a31 * t + a32 * (t^2) + a33 * (t^3);

    px1_t = cos(f1) * sin(f2) * f3 - sin(f1) * d2;
    py1_t = sin(f1) * sin(f2) * f3 + cos(f1) * d2;
    pz1_t = cos(f2) * f3;
    
    px1_bar = diff(px1_t, t);
    py1_bar = diff(py1_t, t);
    pz1_bar = diff(pz1_t, t);

    fun1=sqrt((px1_bar^2) + (py1_bar^2) + (pz1_bar^2));

    fun = matlabFunction(fun1);

    L=integral(fun, 0, tf);


end