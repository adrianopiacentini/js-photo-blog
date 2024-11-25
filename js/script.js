const cardContainer = document.getElementById('card-container')
// console.log(cardContainer)

axios.get('https://jsonplaceholder.typicode.com/photos?_limit=6')
.then ((resp) => {
    resp.data.forEach(element => {
        cardContainer.innerHTML += 
        `
         <div class="card d-flex">
           <img src="./img/pin.svg" class="pin" alt="">
            <div class="card-img mt-3">
            <img src="${element.url}" alt="">
            </div>
            <div class="card-text">${element.title}</div>
         </div>
        `
    })
})
