let table = document.createElement("TABLE");
table.border = "1";
let activeCell = {x:0,y:0};
let size = 0;
let resolution = {width: 15, height : 15}

for(let i =0;i<resolution.height;i++){
let row = document.createElement("TR");
for(let j = 0;j<resolution.width;j++){
    let cell = document.createElement("TD");
    cell.style.backgroundColor="grey";
    cell.addEventListener("mouseover",()=>{
        for(let i = activeCell.x-size;i<=activeCell.x+size;i++)
        for(let j = activeCell.y -size;j<=activeCell.y+size;j++)
        if(j>=0 & j<=14 & i>=0 & i <=14){
        makeUnActive.apply(table.childNodes[i].childNodes[j]);
        }
        activeCell={x:i,y:j};
        for(let i = activeCell.x-size;i<=activeCell.x+size;i++)
        for(let j = activeCell.y -size;j<=activeCell.y+size;j++)
        if(j >=0 & j<=14 & i>=0 & i <=14){
        makeActive.apply(table.childNodes[i].childNodes[j]);
        }
    });
    cell.addEventListener("mouseout",()=>{
        for(let i = activeCell.x-size;i<=activeCell.x+size;i++)
        for(let j = activeCell.y -size;j<=activeCell.y+size;j++)
        if(j>=0 & j<=14 & i>=0 & i <=14)
        makeUnActive.apply(table.childNodes[i].childNodes[j]);
})
    row.appendChild(cell);
}
table.appendChild(row);
}
document.getElementById("display").appendChild(table);

function randColor(){
    let indexes = [];
    while(indexes.length!=3){
        let ind = Math.random()*255;
        indexes.push(ind);
    }
    return `rgb(${indexes.join(",")})`;
}

function makeActive(){
    this.style.transition = "0.1s";
    this.style.backgroundColor = randColor();
    this.style.boxShadow = `0 0 20px ${this.style.backgroundColor}`;
}

function makeUnActive(){
    this.style.transition = "5s";
    this.style.backgroundColor="grey";
    this.style.boxShadow ="";
};

window.addEventListener("keydown",(event)=>{
    makeUnActive.apply(table.childNodes[activeCell.x].childNodes[activeCell.y]);
    switch(event.key){

        case "ArrowUp":{
            if(activeCell.x!=0)
                activeCell.x--;
            break;
        }

        case "ArrowDown":{
            if(activeCell.x!=14)
                activeCell.x++;
            break;
        }

        case "ArrowLeft":{
            if(activeCell.y!=0)
                activeCell.y--;
            break;
        }

        case "ArrowRight":{
            if(activeCell.y!=14)
                activeCell.y++;
            break;
        }
    }
    makeActive.apply(table.childNodes[activeCell.x].childNodes[activeCell.y]);
})

