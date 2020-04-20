
const submitLink = (event) => {
event.preventDefault()

let link = document.getElementById('name').value

if (Client.checkUrl(link))
// Declares a variable response variable from the parameters with await command to send the data from the POST route
    {
    console.log('point 2' + link)
    fetch('http://localhost:8081/evaluate', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(link),
      })
      .then(res => res.json())
    .then((res) => document.getElementById('results').innerHTML = res)
  
}
}


export { submitLink }