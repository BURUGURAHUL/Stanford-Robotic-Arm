function population = initialization(pop_size, chromo_size)
    % Initialize the population array
    population = zeros(pop_size, chromo_size * 2);
    
    % Loop through each individual in the population
    for i = 1:pop_size
        % Loop through each gene in the chromosome (double size for binary encoding)
        for j = 1:chromo_size * 2
            % Assign a random binary value (0 or 1)
            population(i, j) = round(rand);
        end
    end
end
