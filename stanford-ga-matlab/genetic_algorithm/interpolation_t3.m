function d_3_poly = interpolation_t3(d_30,d_3f,t,t3,tf)

a30 = (d_30*(tf^3) - 3*d_30*(tf^2)*t3 + 3*d_3f*tf*(t3^2) - d_3f*(t3^3))/((tf-t3)^3);

a31=(6*(t3*tf)*(d_30 - d_3f))/((tf-t3)^3);

a32= -3*(t3+tf)*(d_30 - d_3f)/((tf-t3)^3);

a33= 2*(d_30 - d_3f)/((tf-t3)^3);

d_3_poly=a30 + a31*t + a32*(t^2) + a33*(t^3);


end