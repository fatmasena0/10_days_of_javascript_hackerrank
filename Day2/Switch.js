function getLetter(s) {
    let letter = s.charAt(0);
    switch (letter) {
        case ('a' || 'e' || 'i' || 'o' || 'u'):
            letter = "A";
            break;
        case ('b' || 'c' || 'd' || 'f' || 'g'):
            letter = "B";
            break;
        case ('h' || 'j' || 'k' || 'l' || 'm'):
            letter = "C";
            break;
        case ('n' || 'p' || 'q' || 'r' || 's' || 't' || 'v' || 'w' || 'x' || 'y' || 'z'):
            letter = "D";
            break;
    }
    return letter;
}