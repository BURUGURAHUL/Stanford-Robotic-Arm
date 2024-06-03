function [t2, t3, best_evaluation] = GA(theta_10, theta_1f, theta_20, theta_2f, d_30, d_3f, tf)
    % Parameters
    generation_size = 100;    % Number of generations
    pop_size = 50;            % Population size
    chromo_size = 10;         % Chromosome length (bits)
    cross_rate = 0.8;         % Crossover rate
    mutate_rate = 0.05;       % Mutation rate

    % Initialize the population with random bitstrings
    pop = initialization(pop_size, chromo_size);

    % Track the best solution found so far
    best = pop(1, :);
    best_evaluation = fitness(pop(1, :), chromo_size, theta_10, theta_1f, theta_20, theta_2f, d_30, d_3f, tf);

    % Iterate over generations
    for gen = 1:generation_size
        % Decode the population
        decoded = zeros(pop_size, 2);  % Adjust the size to store decoded t2 and t3 for each individual
        for i = 1:pop_size
            [t_2, t_3] = decode(pop(i, :), chromo_size, tf);
            decoded(i, :) = [t_2, t_3];
        end

        % Evaluate all candidates in the population
        scores = zeros(1, pop_size);
        for i = 1:pop_size
            scores(i) = fitness(pop(i, :), chromo_size, theta_10, theta_1f, theta_20, theta_2f, d_30, d_3f, tf);
        end

        % Check for a new best solution
        for i = 1:pop_size
            if scores(i) < best_evaluation
                best = pop(i, :);
                best_evaluation = scores(i);
                %fprintf('>%d, new best f(%s) = %f\n', gen, num2str(decoded(i, :)), scores(i));
            end
        end

        % Select parents
        selected = zeros(pop_size, 2 * chromo_size);
        for i = 1:pop_size
            selected(i, :) = selection(pop, scores, 3);
        end

        % Create the next generation - children
        children = zeros(pop_size, 2 * chromo_size);
        for i = 1:2:pop_size
            % Get selected parents in pairs
            p1 = selected(i, :);
            p2 = selected(i + 1, :);
            % Crossover and mutation
            [c1, c2] = crossover(p1, p2, cross_rate);
            c1 = mutation(c1, mutate_rate);
            c2 = mutation(c2, mutate_rate);
            % Store children
            children(i, :) = c1;
            children(i + 1, :) = c2;
        end

        % Replace the population
        
        [dec1,dec2]=decode(best,chromo_size, tf);
        fprintf(' Generation : %d, best solun until now : t2 : %d, t3 : %d, score : %d \n', gen,dec1,dec2,best_evaluation);

        pop = children;
    end

    % Decode the best solution found
    [t2, t3] = decode(best, chromo_size, tf);
end