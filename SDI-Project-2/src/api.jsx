const apiUrl = "https://rickandmortyapi.com/api";

export const fetchCharacters = async () => {
    const response = await fetch(`${apiUrl}/character`);
    const data = await response.json();
    return data.results;

};

export const fetchEpisodes = async () =>{
    const response = await fetch(`${apiUrl}/episode`);
    const data = await response.json();
    return data.results;

};

export const fetchLocations = async () =>{
    const response = await fetch(`${apiUrl}/location`);
    const data = await response.json();
    return data.results;

};