

export const getTradingAll = async () => {
    const response = await fetch('https://www.omdbapi.com/?i=tt3896198&apikey=2df2e7a8');
    const data = await response.json();
    console.log(data);
    return data;
};