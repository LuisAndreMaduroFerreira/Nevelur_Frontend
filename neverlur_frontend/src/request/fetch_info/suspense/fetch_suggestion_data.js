import { wrapPromise } from "../../promise_wrap";

export const fetchSuggestionData = (url) => {
    const dataPromise = fetchSuggestion(url);
    return  {
        data: wrapPromise(dataPromise)
    }
}

const fetchSuggestion = () => fetch()
    .then(response => response.json())
    .catch(error => console.trace());