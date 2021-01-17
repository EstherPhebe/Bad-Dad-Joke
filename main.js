const button = document.querySelector("#button")
const dadJoke = document.querySelector("#jokes")

button.addEventListener("click", () => {
    getJoke()
})
const getJoke = async () => {
    try {
        const config = {headers: {
            "Accept": "application/json"
          }
        }
        const res = await axios.get("https://icanhazdadjoke.com/", config)
        console.log(res.data.joke)
        dadJoke.textContent = res.data.joke
        
    } catch (error) {
        console.log(error)
    }
}