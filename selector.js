let selector = document.getElementById("selector");

document.getElementById("size").childNodes[1].addEventListener("click",()=>{
    size = 0;
    selector.style.top = "0em";
})

document.getElementById("size").childNodes[3].addEventListener("click",()=>{
    size = 1;
    selector.style.top = "2em";
})

document.getElementById("size").childNodes[5].addEventListener("click",()=>{
    size = 2;
    selector.style.top = "4em";
})