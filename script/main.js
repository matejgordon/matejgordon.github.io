var x;
var y;
var ctx;
var c;


function Draw() {
c = document.getElementById("whiteboard");
ctx = c.getContext("2d");
c.setAttribute('width', '800');
c.setAttribute('height', '600');

c.width = document.body.clientWidth;
c.height = document.body.clientHeight; 

ctx.lineWidth = 5;
ctx.strokeStyle = '#000000';
document.getElementById("brush").innerHTML = "Brush size: "+ctx.lineWidth;

}



function showCoords(event) {
    x = event.clientX + window.scrollX;
    y = event.clientY + window.scrollY;
    var coor = "X: " + x + ", Y: " + y;

    
  }

function black(){
ctx.strokeStyle = '#000000';
}

function blue(){
    ctx.strokeStyle = ' #3498db';
}

function red(){
    ctx.strokeStyle = '#c0392b';
}

function clean(){
    console.log("cleaning...")
    ctx.clearRect(0, 0, c.width, c.height);
}

function plus(){
    ctx.lineWidth = ctx.lineWidth + 1
    document.getElementById("brush").innerHTML = "Brush size: "+ctx.lineWidth;
}

function minus(){
    ctx.lineWidth = ctx.lineWidth - 1
    if (ctx.lineWidth = ctx.lineWidth - 1 < 1){
        ctx.lineWidth = 1
    }
    document.getElementById("brush").innerHTML = "Brush size: "+ctx.lineWidth;

}

function plusplus(){
    ctx.lineWidth = ctx.lineWidth + 5
    document.getElementById("brush").innerHTML = "Brush size: "+ctx.lineWidth;
}

function minusminus(){
    ctx.lineWidth = ctx.lineWidth - 5
    if (ctx.lineWidth = ctx.lineWidth - 1 < 1){
        ctx.lineWidth = 1
    }
    document.getElementById("brush").innerHTML = "Brush size: "+ctx.lineWidth;

}


function triplus(){
    ctx.lineWidth = ctx.lineWidth + 50
    document.getElementById("brush").innerHTML = "Brush size: "+ctx.lineWidth;
}

function triminus(){
    ctx.lineWidth = ctx.lineWidth - 50
    if (ctx.lineWidth = ctx.lineWidth - 1 < 1){
        ctx.lineWidth = 1
    }
    document.getElementById("brush").innerHTML = "Brush size: "+ctx.lineWidth;

}


function exportovat(){
    var img = c.toDataURL('image/png')

    var download = document.createElement('a');
    download.href = img;
    download.download = "whiteboard.png";
    download.click();

}

function penDown(event){
    
  if (event.buttons !== 1) return;
  ctx.beginPath();
  ctx.lineCap = 'round';
  ctx.moveTo(x, y);
  showCoords(event);
  ctx.lineTo(x, y);
  ctx.stroke();
}


