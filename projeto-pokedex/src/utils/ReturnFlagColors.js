export const getFlagColors = (pokemonTypes) => {
    switch (pokemonTypes) {
        case "poison":
            return "#ad61ae";
        case "grass":
            return "#70b873";
        case "fire":
            return "#f44900";
        case "flying":
            return "#6892b0";
        case "water":
            return "#33a4f5";
        case "bug":
            return "#316520";
        case "normal":
            return "#8a8a8a";
        case "dark":
            return "#5c5365";
        case "dragon":
            return "#0a6cbf";
        case "electric":
            return "#f4d23b";
        case "fairy":
            return "#ec8fe6";
        case "fighting":
            return "#ce4069";
        case "ghost":
            return "#5269ac";
        case "ground":
            return "#d97745";
        case "ice":
            return "#74cec0";
        case "psychic":
            return "#f67176";
        case "rock":
            return "#c7b78b";
        case "steel":
            return "#bbbbbb";
        default:
            return "";
    }
}