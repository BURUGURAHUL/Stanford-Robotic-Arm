function [t2, t3] = decode(bits, chromo_size, tf)
    bounds = [0, tf];
    largest = 2^chromo_size - 1;  % Correct calculation for the largest value

    t = [];
    for i = 1:length(bounds)
        start = (i - 1) * chromo_size + 1;
        end1 = start + chromo_size - 1;
        t_bin = bits(start:end1);
        t_s = num2str(t_bin);
        t_s = t_s(~isspace(t_s));  % Remove any spaces
        t_d = bin2dec(t_s);
        value = bounds(1) + (t_d / largest) * (bounds(2) - bounds(1));
        t = [t, value];
    end

    t2 = t(1);
    t3 = t(2);
end