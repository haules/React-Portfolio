const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');

const sendHttpRequest = (method, url, data) => {
   return fetch(url,{
    method: method, //this is for the sendData method
    body: JSON.stringify(data),
    headers: data ? {'Content-Type' : 'application/json'} : {}
   })
    .then(response => {
        if(response.status >= 400){ // !response.ok
           return response.json().then(errResponseData => {
            const error = new Error('Something went wrong');
            error.data = errResponseData;
            throw error;
           })
        }
        return response.json();
    });
};

const getData = () => {
    sendHttpRequest('GET', 'https://jsonplaceholder.typicode.com/todos')
        .then(responseData => {
            console.log(responseData);
        })
};

const sendData = () => {
    sendHttpRequest(
        'POST', 
        'https://jsonplaceholder.typicode.com/todos',
        {
            email: 'bau@bau.com',
            password: 'test'
        }).then(responseData => {
            console.log(responseData);
        }).catch(err => {
            console.log(err, err.data);
        })
};

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);