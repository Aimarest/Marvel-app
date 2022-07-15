

function getHeroes() {
    return fetch("https://gateway.marvel.com:443/v1/public/characters?ts=1234&apikey=3ec3e47d4cf73797d8a2e7c9fdff1297&hash=6efa6faba6ddd5dd6a7c21706c81e068", {
        method: 'GET',
        params: {
            "apikey": "3ec3e47d4cf73797d8a2e7c9fdff1297",
            "ts": "1234",
            "hash": "6efa6faba6ddd5dd6a7c21706c81e068"
        }
    })
        .then((response) => response.json())
        .then((response) => {
            const dataClean = response.data.results.map((heroe) => {
                return {
                    id: heroe.id,
                    name: heroe.name,
                    description: heroe.description,
                    image: heroe.thumbnail.path + '.' + heroe.thumbnail.extension
                };
            });
            return dataClean;
           
        });
} 



export default getHeroes;
