const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');

const getData = () => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(response => {
            console.log(response);
        });
};

const sendData = () => {
    axios.post('https://jsonplaceholder.typicode.com/todos', 
        {
            email: 'test@test.com',
            password: 'test'
        // },{
        //     headers: {
        //         'Content-Type': 'application/json' //this isn;t compulsory because axios is smart dealing with it
        //     }
        }).then(response => {
            console.log(response);
        })
        .catch(err => {
            console.log(err, err.response);
        });
};

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);