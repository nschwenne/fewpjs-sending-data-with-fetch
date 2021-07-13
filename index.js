// Add your code here
function submitData(name, email) {
  return fetch('http://localhost:3000/users', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      "name": name,
      "email": email
    })
  })
  .then(response => response.json())
  .then(json => console.log(json))
  .catch((error) => {
    alert('Unauthorized Access');
    return error.message
  })
}


  
  


