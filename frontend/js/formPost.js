const form = document.querySelector('form');

const formEvent = form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  const user = { name, email, password };
  // console.log(Object.values(user));

  const arr = [];
  for (const value in user) {
    console.log("Field: " + `${user[value]}`)
      if (user[value] === ''){
        console.log("rejected" +`${user[value]}`);
      } else {
        console.log('Accepted: ' + `${user[value]}`);
        arr.push(`${user[value]}`)
      }
      console.log(arr);
  }
  document.getElementById('resMessage').innerHTML = "test";

  //Axios Send Data
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