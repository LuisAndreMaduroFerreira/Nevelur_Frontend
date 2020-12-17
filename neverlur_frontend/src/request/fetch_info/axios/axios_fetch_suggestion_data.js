
const axios = require('axios');

export const fetchSuggestionData = async (url) =>{
    console.log(url)
    await axios.get(url)
    .then(function (response) {
    console.log(response.data[0]);
    return response.data[0];
})
.catch(function (error) {
console.log('There has been a problem with your fetch operation: ' + error.message);
})
}
