const form = document.querySelector('form');

const formEvent = form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  //create object with
  const user = { name, email, password };

  const arr = [];
  for (const value in user) {
      if (user[value] === ''){
        console.log(`${value}`)
      } else {
        arr.push(`${user[value]}`)
      }
  }
       console.log(arr);
  console.log(user);
  document.getElementById('resMessage').innerHTML = "test";

  //Insert Axios Send Data
  //sendData(user);
})

const fetchInfo = () => {
  axios.get('https://example.com')
    .then((response) => {
      const data = response.data
    })
}

async function sendData(user) {
  console.log(user)
  axios.post('https://reqres.in/api/users', user)
    .then(response => {
        const addedUser = response;
         console.log(addedUser);
    })
    .catch(error => console.error(error));
};