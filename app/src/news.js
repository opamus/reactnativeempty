// great britain news
// const url = "https://newsapi.org/v2/top-headlines?country=gb&apiKey=0e274dd6d0104ef28356c3e1252a0dad";
// usa news
const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=0e274dd6d0104ef28356c3e1252a0dad";
// worldwide news (doesn't work?)
// const url = "https://newsapi.org/v2/top-headlines?apiKey=0e274dd6d0104ef28356c3e1252a0dad";

export async function getNews() {
    let result = await fetch(url).then(response => response.json());
    return result.articles;
}