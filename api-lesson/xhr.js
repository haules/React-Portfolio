const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');

const sendHttpRequest = (method, url, data) => {
const promise= new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url); // getting the data

    xhr.setRequestHeader('Content-Type', 'application/json')

    xhr.onload = () =>  {
        if(xhr.status >= 400){
            reject(xhr.response)
        }else{
            resolve(xhr.response);
        }
        
    };

    xhr.onerror = () => {
        reject('Something went wrong!')

    }

    xhr.send(JSON.stringify(data)); //sends the pre-configure requests
    });
    return promise;

    
}

const getData = () => {
   sendHttpRequest(
    'GET', 
    'https://jsonplaceholder.typicode.com/posts').then(responseData => {
        console.log(responseData)
    });
};

const sendData = () => {
    sendHttpRequest(
        'POST', 
        'https://jsonplaceholder.typicode.com/todos', {
            email: 'test@test.com',
            password: 'testerd'
        }).then(responseData => {
            console.log(responseData)
        }).catch(err => {
            console.log(err)
        });
        
};

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', postBtn);