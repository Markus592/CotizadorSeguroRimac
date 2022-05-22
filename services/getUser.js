export default async function getUser(placa) {
  const apiURL = `https://jsonplaceholder.typicode.com/users`;
  let data;
  return await fetch(apiURL)
    .then((res) => res.json())
    .then((response) => {
      if (Array.isArray(response)) {
        let user = response[0];
        data=[user,placa]
        // console.log(data)
        return data; 
      }
    });
}
