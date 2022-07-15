var x;
var y;
var ctx;
var c;
var gumaobject;


function Draw() {
    c = document.getElementById("whiteboard");
    ctx = c.getContext("2d");
    c.setAttribute('width', '800');
    c.setAttribute('height', '600');

    c.width = document.body.clientWidth;
    c.height = document.body.clientHeight;

    ctx.lineWidth = 10;
    ctx.strokeStyle = document.getElementById("colorChoice").value;
    document.getElementById("brush").innerHTML = "Brush size: " + ctx.lineWidth;

}



function showCoords(event) {
    x = event.clientX + window.scrollX;
    y = event.clientY + window.scrollY;
    var coor = "X: " + x + ", Y: " + y;


}

function clean() {
    console.log("cleaning...")
    ctx.clearRect(0, 0, c.width, c.height);
}

function exportovat() {
    var img = c.toDataURL('image/png');
    var download = document.createElement('a');
    download.href = img;
    download.download = "whiteboard.png";
    download.click();

}

function guma() {
    document.getElementsByClassName("gumaimg")[0].style.backgroundColor = "grey"
    document.getElementsByClassName("stetec")[0].style.backgroundColor = "lightgray";
    gumaobject = true;
}


function changeColor(){
    ctx.strokeStyle = document.getElementById("colorChoice").value; 
    paint()
}

function paint(){
    document.getElementsByClassName("gumaimg")[0].style.backgroundColor = "lightgray"
    document.getElementsByClassName("stetec")[0].style.backgroundColor = "grey";

    gumaobject = false;
}

function changeSize(){
    ctx.lineWidth = document.getElementById("size").value
    document.getElementById("brush").innerHTML = "Brush size: " + ctx.lineWidth;
}

function penDown(event) {

    if (event.buttons !== 1) return;

    if (gumaobject == true) {
        showCoords(event);
        ctx.clearRect(x - (ctx.lineWidth / 2), y - (ctx.lineWidth / 2), ctx.lineWidth, ctx.lineWidth);
    } else {
        ctx.beginPath();
        ctx.lineCap = 'round';
        ctx.moveTo(x, y);
        showCoords(event);
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}