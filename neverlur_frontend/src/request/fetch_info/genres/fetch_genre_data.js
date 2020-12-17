import { wrapPromise } from "../../promise_wrap.js";

export const fetchGenreData = (url) => {
    const genrePromise = fetchGenre(url);
    return  {
        genre: wrapPromise(genrePromise)
    }
}

const fetchGenre = () => fetch()
    .then(response => response.json())
    .catch(error => console.trace());