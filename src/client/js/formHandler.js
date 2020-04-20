const handleSubmit = (event) => {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })
}



/*describe("Check for Name Match", () => {
    test("Whenever the input is the exact match of the list of names inside nameChecker, it should")
})*/



export { handleSubmit }
