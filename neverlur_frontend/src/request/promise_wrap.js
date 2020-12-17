export const wrapPromise = promise => {
    let result;
    let status = 'pending';
    let suspender = promise.then(
        response => {
            status = 'success';
            result = response;
        },
        error => {
             status = 'error';
             result = error;
        });
    return {
        read(){
            if(status === 'pending') {
                throw suspender;
            }
            else if(status === 'error') {
                throw result;
            }
            else if(status === 'success') {
                console.log(result)
                return result;
            }

        }
    }
}

/*
const handleGetJson = (url) => {
    console.log("fetching" + url);
    fetch(url, {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      })
      .then((response) => response.json())
      .catch(error => {console.log(error)})
      .then((messages) => {console.log("messages");});
  }

const fetchGenre = () => handleGetJson(
    'http://localhost:8000/api/genres/1/');
*/