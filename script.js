


const search=document.getElementById("search");
const input=document.getElementById("input");
const searchResult=document.getElementById("search-result");
const showMore=document.getElementById("show-more");

let keyword="";
let page=1;

async function searchImage(){
    keyword=input.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response=await fetch(url);
    const data =await response.json();

    const results=data.results;
    console.log(data);
    if(page===1)
    {
        searchResult.innerHTML="";
    }
    results.map((result)=>{
        const box=document.createElement("div");
        box.innerHTML=`<div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${result.urls.small}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${result.user.first_name} ${result.user.last_name}</br>
          Clicked at ${result.user.location}</br>
          Total likes ${result.user.total_likes}

          </h5>
        </div>
      </div>`
      searchResult.appendChild(box);
      
       
    })
    showMore.style.display="block";
}

search.addEventListener('submit',(event)=>{
    event.preventDefault();
    page=1;
    searchImage();
})
showMore.addEventListener('click',()=>{
    page++;
    searchImage();
})
