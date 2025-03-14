const accesskey="e0p4DagRvmK0upHzZt6UT9YKCu9uTPmtZuEpe4x8-mI";

const form = document.querySelector(".search-form")
const searchBox = document.querySelector("#search-box")
const searchBtn = document.querySelector(".search-button")
const searchresult = document.querySelector("#search-result")
const showMoreBtn = document.querySelector("#show-more")
const deleteBtn = document.querySelector(".delete")

let keyword="";
let page=1;

const searchImage = async() =>{
    keyword=searchBox.value;
   
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();
    if(page === 1){
        searchresult.innerHTML="";
    }
   

   const results =data.results;
   results.map((result)=>{
     const image = document.createElement("img");
     image.src=result.urls.small;
     const imageLink = document.createElement("a");
     imageLink.href=result.links.html;
     imageLink.target="_blank";


     imageLink.appendChild(image);

     searchresult.appendChild(imageLink);
   })
   
   deleteBtn.classList.add("removeBtn");
   showMoreBtn.classList.add("show");
   
}

form.addEventListener("submit" , (e)=>{
    e.preventDefault();
    page=1;
    searchImage();
})

showMoreBtn.addEventListener("click", ()=>{
    page++;
    searchImage();
})
deleteBtn.addEventListener("click",()=>{
    searchBox.value="";
    if(searchBox.value==""){
        
        deleteBtn.classList.remove("removeBtn");
        }
})