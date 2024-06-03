function [px,py,pz] = Forward_kine(theta_1,theta_2,d_3)

%Forward_kine(theta_1,theta_2,d_3,theta_4,theta_5,theta_6)

%Standard DH parameters
% | theta_i | | d_i | a_i | | alpha_i|
% |   q1    | |  0  |  0  | |   -90  |
% |   q2    | |  d2 |  0  | |    90  |
% |   d3    | |  d3 |  0  | |     0  |
% |   q4    | |  0  |  0  | |   -90  |
% |   q5    | |  0  |  0  | |    90  |
% |   q6    | |  0  |  0  | |     0  |


%A=[cos(theta_n)    -sin(theta_n)    sin(theta_n)*sin(alpha_n)     an*cos(theta_n) ]
%  [sin(theta_n)     cos(theta_n)   -cos(theta_n)*sin(alpha_n)    an*sin(theta_n)  ]
%  [     0          -sin(alpha_n)        cos(alpha_n)                    dn        ]
%  [     0                0                  0                            1        ] 

% Transformation Matrix

%T=A1 x A2 x A3 x A4 x A5 x A6
d2=0.154;

%A1=matrix_A(theta_1,0,0,-1.578);
%A2=matrix_A(theta_2,d2,0,1.578);
%A3=matrix_A(0,d_3,0,0);
%A4=matrix_A(theta_4,d_3,0,0);
%A5=matrix_A(theta_5,d_3,0,0);
%A6=matrix_A(theta_6,d_3,0,0);

%T=A1*A2*A3*A4*A5*A6;

px=cos(theta_1)*sin(theta_2)*d_3 - sin(theta_1)*d2 ;

py=sin(theta_1)*sin(theta_2)*d_3 + cos(theta_1)*d2;

pz=cos(theta_2)*d_3;

%px=T(1,4);
%py=T(2,4);
%pz=T(3,4);

end