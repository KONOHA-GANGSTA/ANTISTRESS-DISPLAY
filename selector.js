let selector = document.getElementById("selector");

let step = document.getElementById("size").childNodes[1].clientHeight;
selector.style.top=step+"px";

for(let i = 3;i<8;i++)
    if(i%2==1)
        document.getElementById("size").childNodes[i].addEventListener("click",()=>{
            switch(i){
                case 3:{
                    size = 0;
                    selector.style.top = step +"px";
                    break;
                }
                case 5:{
                    size = 1;
                    selector.style.top = 2* step +"px";
                    break;
                }
                case 7:{
                    size = 2;
                    selector.style.top = 3* step +"px";
                    break; 
                }
            }
        })
