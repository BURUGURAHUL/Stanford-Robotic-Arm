function selected_pop = selection(pop, scores, k)
    % Initialize the selection index with a random value within the population length
    selection_ix = randi(length(scores));

    % Generate k-1 random indices within the range of the population length
    random_indices = randi([1, length(scores)], 1, k-1);

    % Iterate through the random indices to find the one with the best score
    for i = 1:length(random_indices)
        ix = random_indices(i);
        if scores(ix) < scores(selection_ix)
            selection_ix = ix;
        end
    end

    % Return the selected individual from the population
    selected_pop = pop(selection_ix, :);
end