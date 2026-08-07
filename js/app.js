const API =
"https://script.google.com/macros/s/AKfycbx5qhCgQVVV6MSXEnT0hcNnkgmrIhpQy4x5XuDRzMGd20vZX0Ytnkc1QitM9gyqAvdt/exec";
fetch(API)
.then(response=>response.json())
.then(data=>{
    createCards(data);
});
function createCards(files){
const container=document.getElementById("resources");
container.innerHTML="";
files.forEach(file=>{
container.innerHTML+=`
<div class="card">
<h3>${file.name}</h3>
<p>${file.folder}</p>
<a href="${file.url}" target="_blank">
Open Resource
</a>
</div>
`;
});
}
