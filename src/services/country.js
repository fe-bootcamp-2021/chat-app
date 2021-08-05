const BASE_URL = 'https://restcountries.eu/rest/v2/all';

function Country() {
  fetch(BASE_URL)
    .then((r) => r.json())
    .then((data) => console.log(data));
}

export default Country;
