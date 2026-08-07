const API =
"https://script.google.com/macros/s/AKfycbx5qhCgQVVV6MSXEnT0hcNnkgmrIhpQy4x5XuDRzMGd20vZX0Ytnkc1QitM9gyqAvdt/exec";

fetch(API)

.then(response=>response.json())

.then(data=>{

    createCards(data);

});
