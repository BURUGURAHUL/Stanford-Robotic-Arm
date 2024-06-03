function score = fitness(individual, chromo_size, theta_10, theta_1f, theta_20, theta_2f, d_30, d_3f, tf)
    
        bits = individual;
        [t2, t3] = decode(bits, chromo_size, tf);
        score = distance(theta_10, theta_1f, theta_20, theta_2f, d_30, d_3f, t2, t3, tf);
end