const access_key = "";
const input_button = document.getElementById('input_button')
const search_result = document.getElementById('search-results')
const showMore = document.getElementById('show-more-button')
const form = document.querySelector('form')

let keyword = ""

let page =1 

async function search_image(){
    keyword = input_button.value;
    const url = `https://api.unsplash.com/search/collections?page=${page}&query=${keyword}&client_id=${access_key}&per_page=9`
    const response = await fetch(url)
    const data = await response.json()


    if(page === 1){
        search_result.innerHTML=""
    }
   
    const results = data.results

    results.map((result)=>{
        const image = document.createElement('img')
        image.src = result.cover_photo.urls.small
        image.alt = `${keyword}`

        const imageLink = document.createElement('a')
        imageLink.href = result.links.html
        imageLink.target = "_blank"

        imageLink.appendChild(image)
        search_result.appendChild(imageLink)
    })
}
form.addEventListener('submit', function(e){
    showMore.style.display="block"
    e.preventDefault()
    page =1
    search_image()
})

showMore.addEventListener('click', ()=>{
    page++;
    search_image()
})
