function [c1, c2] = crossover(p1, p2, cross_rate)

% Initialize offspring as copies of parents
c1 = p1;
c2 = p2;

if rand() < cross_rate
    % Select a crossover point (not at the end of the string)
    pt = randi([1, length(p1) - 2]);
    
    % Perform crossover
    c1 = [p1(1:pt), p2(pt+1:end)];
    c2 = [p2(1:pt), p1(pt+1:end)];
end

end
