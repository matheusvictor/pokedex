const apiVersion = 'v2';
const source = 'pokemon'

const  pokeApi = {}

pokeApi.getAll = (offset = 0, limit = 10) => {
    const URL = `https://pokeapi.co/api/${apiVersion}/${source}?offset=${offset}&limit=${limit}`;
    return fetch(URL)
            .then((response) => response.json())
            .then((responseBody) => responseBody.results)
            .catch(function (error){
                console.log(error)
            });
}
