export const getCardColors = (pokemonTypes) => {
    switch (pokemonTypes) {
        case "poison":
            return "#ad70ae";
        case "grass":
            return "#729f92";
        case "fire":
            return "#eaab7d";
        case "flying":
            return "#506e85";
        case "water":
            return "#71c3ff";
        case "bug":
            return "#76a866";
        case "normal":
            return "#bf9762";
        case "dark":
            return "#846e99";
        case "dragon":
            return "#549ede";
        case "electric":
            return "#f2e39d";
        case "fairy":
            return "#ba4cb2";
        case "fighting":
            return "#c46882";
        case "ghost":
            return "#7185bd";
        case "ground":
            return "#a37862";
        case "ice":
            return "#3a9997";
        case "psychic":
            return "#ad4044";
        case "rock":
            return "#967e72";
        case "steel":
            return "#8c8c8c";
        default:
            return "";
    }
}