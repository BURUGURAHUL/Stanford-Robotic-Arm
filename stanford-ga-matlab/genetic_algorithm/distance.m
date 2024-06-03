function L = distance(theta_10,theta_1f,theta_20,theta_2f,d_30,d_3f,t2,t3,tf)
    
    d2=0.154;
    a10 = theta_10;
    a11 = 0;
    a12 = (3 / (tf^2)) * (theta_1f - theta_10);
    a13 = -(2 / (tf^3)) * (theta_1f - theta_10);

    % Define symbolic variable t
    syms t

    % Define the polynomial function f1
    f1 = a10 + a11 * t + a12 * (t^2) + a13 * (t^3);
    
    a20 = (theta_20*(tf^3) - 3*theta_20*(tf^2)*t2 + 3*theta_2f*tf*(t2^2) - theta_2f*(t2^3))/((tf-t2)^3);

    a21=(6*(t2*tf)*(theta_20 - theta_2f))/((tf-t2)^3);

    a22= -3*(t2+tf)*(theta_20 - theta_2f)/((tf-t2)^3);
    
    a23= 2*(theta_20 - theta_2f)/((tf-t2)^3);

    f2=a20 + a21*t + a22*(t^2) + a23*(t^3);

    a30 = (d_30*(tf^3) - 3*d_30*(tf^2)*t3 + 3*d_3f*tf*(t3^2) - d_3f*(t3^3))/((tf-t3)^3);

    a31=(6*(t3*tf)*(d_30 - d_3f))/((tf-t3)^3);

    a32= -3*(t3+tf)*(d_30 - d_3f)/((tf-t3)^3);

    a33= 2*(d_30 - d_3f)/((tf-t3)^3);

    f3=a30 + a31*t + a32*(t^2) + a33*(t^3);


    %if(0<tv && tv<t2)
    
    if(t2<t3)
    % Define the position functions
    px1_t = cos(f1) * sin(theta_20) * d_30 - sin(f1) * d2;
    py1_t = sin(f1) * sin(theta_20) * d_30 + cos(f1) * d2;
    pz1_t = cos(theta_20) * d_30;
    
    px1_bar = diff(px1_t, t);
    py1_bar = diff(py1_t, t);
    pz1_bar = diff(pz1_t, t);

    fun1=sqrt((px1_bar^2) + (py1_bar^2) + (pz1_bar^2));

    fun = matlabFunction(fun1);

    L1=integral(fun, 0, t2);

    %else if(t2<tv && tv<t3)

        px2_t = cos(f1) * sin(f2) * d_30 - sin(f1) * d2;
        py2_t=sin(f1)*sin(f2)*d_30 + cos(f1)*d2;
        pz2_t= cos(f2)*d_30;

        px2_bar = diff(px2_t, t);
        py2_bar = diff(py2_t, t);
        pz2_bar = diff(pz2_t, t);

        fun1=sqrt((px2_bar^2) + (py2_bar^2) + (pz2_bar^2));

        fun = matlabFunction(fun1);

        L2=integral(fun, t2, t3);
   
    %else

        px3_t = cos(f1) * sin(f2) * f3 - sin(f1) * d2;
        py3_t=sin(f1)*sin(f2)*f3 + cos(f1)*d2;
        pz3_t= cos(f2)*f3;

        px3_bar = diff(px3_t, t);
        py3_bar = diff(py3_t, t);
        pz3_bar = diff(pz3_t, t);

        fun1=sqrt((px3_bar^2) + (py3_bar^2) + (pz3_bar^2));

        fun = matlabFunction(fun1);

        L3=integral(fun, t3, tf);

        L=L1+L2+L3;

    else

        px1_t = cos(f1) * sin(theta_20) * d_30 - sin(f1) * d2;
        py1_t = sin(f1) * sin(theta_20) * d_30 + cos(f1) * d2;
        pz1_t = cos(theta_20) * d_30;
    
        px1_bar = diff(px1_t, t);
        py1_bar = diff(py1_t, t);
        pz1_bar = diff(pz1_t, t);

        fun1=sqrt((px1_bar^2) + (py1_bar^2) + (pz1_bar^2));

        fun = matlabFunction(fun1);

        L1=integral(fun, 0, t3);
        
        % t3<t<t2

        px2_t = cos(f1) * sin(theta_20) * f3 - sin(f1) * d2;
        py2_t=sin(f1)*sin(theta_20)*f3 + cos(f1)*d2;
        pz2_t= cos(theta_20)*f3;

        px2_bar = diff(px2_t, t);
        py2_bar = diff(py2_t, t);
        pz2_bar = diff(pz2_t, t);

        fun1=sqrt((px2_bar^2) + (py2_bar^2) + (pz2_bar^2));

        fun = matlabFunction(fun1);

        L2=integral(fun, t3, t2);
    
         %t2<t<tf

         px3_t = cos(f1) * sin(f2) * f3 - sin(f1) * d2;
         py3_t=sin(f1)*sin(f2)*f3 + cos(f1)*d2;
         pz3_t= cos(f2)*f3;

         px3_bar = diff(px3_t, t);
         py3_bar = diff(py3_t, t);
         pz3_bar = diff(pz3_t, t);

         fun1=sqrt((px3_bar^2) + (py3_bar^2) + (pz3_bar^2));

         fun = matlabFunction(fun1);

         L3=integral(fun, t2, tf);

         L=L1+L2+L3;
    end
%end

end