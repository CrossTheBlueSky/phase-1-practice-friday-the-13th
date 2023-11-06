const list = document.getElementById("movie-list")

function initialize(){
    fetch("http://localhost:3000/movies")
        .then((res)=>{
           return res.json()
        }).then((data)=>{
            data.forEach(e =>createNavElement(e))
            populateMovie(data[0])
        })
}

initialize()

function createNavElement(movie){
    let newImg = document.createElement("img")
    newImg.src = `${movie.image}`
    newImg.addEventListener("click", ()=>{
        populateMovie(movie)

    })
    list.append(newImg)

}

function populateMovie(data){
    const img = document.getElementById("detail-image")
    const year = document.getElementById("year-released")
    const desc = document.getElementById("description")
    const title = document.getElementById("title")
    const watchToggle = document.getElementById("watched")
    const bloodForm = document.getElementById("blood-form")
    const bloodTotal = document.getElementById("amount")
    let bloodCount = 0
    let isWatched = true

    img.src = `${data.image}`
    year.innerHTML = `${data.release_year}`
    desc.innerHTML = `${data.description}`
    title.innerHTML = `${data.title}`
    

    watchToggle.addEventListener("click", ()=>{
        updateWatchToggle(isWatched)
        isWatched = !isWatched
    })

    bloodForm.addEventListener("submit", (e)=>{
        e.preventDefault()
        bloodCount = parseInt(e.target[0].value) + bloodCount
        bloodTotal.innerText = `${bloodCount}`

    })
}

function updateWatchToggle(bool){

    const watchToggle = document.getElementById("watched")
    if(bool === true){
    watchToggle.innerText = "Not Watched"
    }else if(bool === false){
        watchToggle.innerText = "Watched"
    }

    // console.log(data)
    // console.log(!data.watched)
    // data.watched = !data.watched
    // const watchedObj =  {method: "PUT",
    // body: JSON.stringify(data)}
   
    // fetch("http://localhost:3000/movies", {watchedObj})
    // .then((res)=>console.log(res))
    

}
