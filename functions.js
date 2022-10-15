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

function enlightRadius(r){
    for(let i = activeCell.x-r;i<=activeCell.x+r;i++)
        for(let j = activeCell.y -r;j<=activeCell.y+r;j++)
            if(j>=0 & j<=resolution.width-1 & i>=0 & i <=resolution.height-1)
                if(i == activeCell.x - r || i == activeCell.x + r || j == activeCell.y -r || j == activeCell.y +r){
                table.childNodes[i].childNodes[j].style.transition = "0.1s"
                table.childNodes[i].childNodes[j].style.backgroundColor = this.style.backgroundColor;
                }
}

function turnoffRadius(r){
    for(let i = activeCell.x-r;i<=activeCell.x+r;i++)
        for(let j = activeCell.y -r;j<=activeCell.y+r;j++)
            if(j>=0 & j<=resolution.width-1 & i>=0 & i <=resolution.height-1)
                if(i == activeCell.x - r || i == activeCell.x + r || j == activeCell.y -r || j == activeCell.y +r){
                table.childNodes[i].childNodes[j].style.transition = "1s"
                table.childNodes[i].childNodes[j].style.backgroundColor = "grey";
                }
}

function turnOFF(){
    for(let i =0;i<resolution.height;i++)
        for(let j = 0;j<resolution.width;j++){
            table.childNodes[i].childNodes[j].style.transition = "1s"
            table.childNodes[i].childNodes[j].style.backgroundColor = "grey";
        }
}