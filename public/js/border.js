console.log("here ooooo");
let cont;
let border;
let code;
let range = document.querySelector('#range');
let color = document.querySelector('#color');
let borderStyle = document.querySelector('#borderStyle');
let borderColor = document.querySelector('#color');
let container = document.querySelector('#divContainer');
let codeContainer = document.querySelector('#codeContainer');
 function Container(id,backgroundColor="#eee"){
    this.div=id;
    this.height="300px";
    this.width="300px";
    this.color=color;
    this.backgroundColor=backgroundColor;
}

Container.prototype.draw=function(){
    this.div.style.width= this.width;
    this.div.style.height=this.height;
    this.div.style.backgroundColor= this.backgroundColor;
    this.div.style.color= this.color;
}
Container.prototype.border= function(border){
    this.div.style.border= border;
}

function Border(borderWidth="10",borderColor="red",borderStyle="solid"){
    this.borderWidth=borderWidth;
    this.borderColor=borderColor;
    this.borderStyle=borderStyle;
    this.borderTop=`${this.borderWidth}px ${this.borderColor} ${this.borderColor}`;
    this.borderBottom=`${this.borderWidth}px ${this.borderColor} ${this.borderColor}`;
    this.borderLeft=`${this.borderWidth}px ${this.borderColor} ${this.borderColor}`;
    this.borderRight=`${this.borderWidth}px ${this.borderColor} ${this.borderColor}`;
}

Border.prototype.borderShortand= function(){
    return `${this.borderWidth}px ${this.borderStyle} ${this.borderColor}`;
}
Border.prototype.borderFull = function(){
        return `border-top: ${this.borderTop}\n
                border-bottom: ${this.borderBottom}\n
                border-left: ${this.borderLeft}\n
                border-right: ${this.borderRight}
                `;
};

function showCode(borderWidth,borderStyle,borderColor){
    this.width=borderWidth;
    this.style=borderStyle;
    this.color=borderColor;
    this.generateCode=function(){
        codeContainer.innerHTML=`<p> border:  ${this.width}px ${this.style} ${this.color}</p>`;
    }
}

loadEventListener();

function loadEventListener(){
    range.addEventListener('input',adjustBorderWith);
    borderStyle.addEventListener('change',adjustBorderStyle);
    color.addEventListener('input',adjustBorderColor);
}


function adjustBorderWith(e){
        let value = e.target.value;
        border.borderWidth=value;
        cont.border(border.borderShortand());
        code.width=value;
        code.generateCode();
}

function adjustBorderStyle(e){
    let value = e.target.value;
    border.borderStyle=value;
    cont.border(border.borderShortand());
    code.style=value;
    code.generateCode();
}

function adjustBorderColor(e){
    let value = e.target.value;
    border.borderColor=value;
    cont.border(border.borderShortand());
    code.color=value;
    code.generateCode();
}

!(function(){
     cont =  new Container(container)
     border = new Border();
     code = new showCode(border.borderWidth,border.borderStyle,border.borderColor); 
    cont.div.style.border= border.borderShortand();
    cont.draw();
    code.generateCode();
    
})()




// container.style.width="500px";
// container.style.height="400px";
// container.style.backgroundColor="red";
// function border(borderStyle){
//     this.borderStyle = borderStyle;
// }

// border.prototype.draw= function(){
//     this.borderStyle
// }


// borderStyle.addEventListener('change',(e)=>{
//         style.innerText = e.target.value;
// })

// range.addEventListener('input',(e)=>{
//     borderSize.innerText = e.target.value+"px";
// })
// borderColor.addEventListener('input',(e)=>{
//     color.innerText = e.target.value;
// })
