table = document.createElement("TABLE");
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
        if(j>=0 & j<=resolution.width-1 & i>=0 & i <=resolution.height-1)
        makeUnActive.apply(table.childNodes[i].childNodes[j]);
        activeCell={x:i,y:j};
        turnOFF();
        for(let i = activeCell.x-size;i<=activeCell.x+size;i++)
            for(let j = activeCell.y -size;j<=activeCell.y+size;j++)
                if(j>=0 & j<=resolution.width-1 & i>=0 & i <=resolution.height-1)
                     makeActive.apply(table.childNodes[i].childNodes[j]);
    });
    cell.addEventListener("mouseout",()=>{
        for(let i = activeCell.x-size;i<=activeCell.x+size;i++)
            for(let j = activeCell.y -size;j<=activeCell.y+size;j++)
                if(j>=0 & j<=resolution.width-1 & i>=0 & i <=resolution.height-1)
                    makeUnActive.apply(table.childNodes[i].childNodes[j]);
})

    cell.addEventListener("click",()=>{
        let r = 1;
        let timer = 100;
        while(r != Math.max(resolution.width,resolution.height)){
        setTimeout(enlightRadius.bind(table.childNodes[activeCell.x].childNodes[activeCell.y]),timer,r);
        setTimeout(turnoffRadius.bind(table.childNodes[activeCell.x].childNodes[activeCell.y]),timer+100,r);
        ++r;
        timer+=100;
        }
        for(let i = activeCell.x-size;i<=activeCell.x+size;i++)
        for(let j = activeCell.y -size;j<=activeCell.y+size;j++)
        if(j>=0 & j<=resolution.width-1 & i>=0 & i <=resolution.height-1)
        table.childNodes[i].childNodes[j].style.boxShadow ="";
    })

    row.appendChild(cell);
}
table.appendChild(row);
}
document.getElementById("display").appendChild(table);

window.addEventListener("keydown",(event)=>{
    for(let i = activeCell.x-size;i<=activeCell.x+size;i++)
        for(let j = activeCell.y -size;j<=activeCell.y+size;j++)
            if(j>=0 & j<=resolution.width-1 & i>=0 & i <=resolution.height-1)
                makeUnActive.apply(table.childNodes[i].childNodes[j]);

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

        case " ":{
            table.childNodes[activeCell.x].childNodes[activeCell.y].click();
        }
    }

    turnOFF();

    for(let i = activeCell.x-size;i<=activeCell.x+size;i++)
        for(let j = activeCell.y -size;j<=activeCell.y+size;j++)
            if(j>=0 & j<=resolution.width-1 & i>=0 & i <=resolution.height-1)
                makeActive.apply(table.childNodes[i].childNodes[j]);
});