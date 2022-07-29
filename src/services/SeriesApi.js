function getSeries() {
    return fetch("https://gateway.marvel.com:443/v1/public/series?ts=1234&apikey=3ec3e47d4cf73797d8a2e7c9fdff1297&hash=6efa6faba6ddd5dd6a7c21706c81e068", {
        method: 'GET',
        params: {
            "apikey": "3ec3e47d4cf73797d8a2e7c9fdff1297",
            "ts": "1234",
            "hash": "6efa6faba6ddd5dd6a7c21706c81e068"
        }
    })
        .then((response) => response.json())
        .then((response) => {
            const dataClean = response.data.results.map((serie) => {
                return {
                    id: serie.id,
                    title: serie.title,
                   year:serie.startYear,
                    image: serie.thumbnail.path + '.' + serie.thumbnail.extension
                };
            });
            return dataClean;
           
        });
} 



export default getSeries;
