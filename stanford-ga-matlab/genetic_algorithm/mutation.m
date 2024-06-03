function mutated = mutation(bits, mutate_rate)
    for i = 1:length(bits)
        if rand() < mutate_rate
            bits(i) = 1 - bits(i);
        end
    end
    mutated = bits;
end
