function out = simulation(theta_1,theta_2,d_3)

clear L
%             th    d       a    alpha
L(1) = Link([ 0     0.412   0   -pi/2     0]);
L(2) = Link([ 0     0.154   0    pi/2     0]);
L(3) = Link([ -pi/2 0       0    0        1]);  % PRISMATIC link
L(4) = Link([ 0     0       0   -pi/2     0]);
L(5) = Link([ 0     0       0    pi/2     0]);
L(6) = Link([ 0     0       0    0        0]);

tool = transl(0, 0, 0.263);

L(3).qlim = [12 12+38] * 0.0254;


L(1).qlim = [-170 170]*pi/180;
L(2).qlim = [-170 170]*pi/180;
L(4).qlim = [-170 170]*pi/180;
L(5).qlim = [-90 90]*pi/180;
L(6).qlim = [-170 170]*pi/180;


L(1).m = 9.29;
L(2).m = 5.01;
L(3).m = 4.25;
L(4).m = 1.08;
L(5).m = 0.630;
L(6).m = 0.51;

L(1).Jm = 0.953;
L(2).Jm = 2.193;
L(3).Jm = 0.782;
L(4).Jm = 0.106;
L(5).Jm = 0.097;
L(6).Jm = 0.020;

L(1).G = 1;
L(2).G = 1;
L(3).G = 1;
L(4).G = 1;
L(5).G = 1;
L(6).G = 1;

L(1).I = [0.276   0.255   0.071   0   0   0];
L(2).I = [0.108   0.018   0.100   0   0   0];
L(3).I = [2.51    2.51    0.006   0   0   0 ];
L(4).I = [0.002   0.001   0.001   0   0   0 ];
L(5).I = [0.003   0.0004  0       0   0   0];
L(6).I = [0.013   0.013   0.0003  0   0   0];

L(1).r = [0    0.0175 -0.1105];
L(2).r = [0   -1.054  0];
L(3).r = [0    0      -6.447];
L(4).r = [0    0.092  -0.054];
L(5).r = [0    0.566   0.003];
L(6).r = [0    0       1.554];

qz = [0 0 0 0 0 0];

stanf = SerialLink(L, 'name', 'Stanford arm');
%stanf.plotopt = {'workspace', [-200 300 100 250 80 100]}
stanf.plotopt = {'workspace', [-4 4 -4 4 -4 4]}
stanf.model3d = 'example/stanford';
stanf.tool = tool;


for i=1:length(theta_1)
    stanf.plot([theta_1(i) theta_2(i) d_3(i) 0 0 0])
    pause(0.05)
end
out=1;
end