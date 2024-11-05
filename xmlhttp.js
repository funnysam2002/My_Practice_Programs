const req = new XMLHttpRequest();
req.onload = function(){
    console.log("it loaded!!");
    const data =JSON.parse(this.responseText);
    console.log(data)
}

req.onerror = function(){
    console.log("error!!");
    console.log(this);
}
req.open("GET","https://swapi.dev/api/people/2/");
req.send();




// const form = document.querySelector('#searchForm')

// form.addEventListener('submit',async function(e){
// e.preventDefault();
// const userTerm = form.elements.query.value;
// const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${userTerm}`);
// console.log(res.data);
// })