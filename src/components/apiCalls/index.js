export const getBreakingBadQuotes = (quotesAmount, setStater) => {
    fetch("https://breaking-bad-quotes.herokuapp.com/v1/quotes/" + quotesAmount.toString())
        .then(res => res.json())
        .then(result => {
            setStater(Array.isArray(result) ? result : [result]);
        });
}

export const getGameofThronesQuotes = (quotesAmount, setStater) => {
    fetch("https://game-of-thrones-quotes.herokuapp.com/v1/random/" + quotesAmount.toString())
        .then(res => res.json())
        .then(result => {
            setStater(Array.isArray(result) ? result : [result]);
        });
}