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

    ctx.lineWidth = 5;
    ctx.strokeStyle = '#000000';
    document.getElementById("brush").innerHTML = "Brush size: " + ctx.lineWidth;

}



function showCoords(event) {
    x = event.clientX + window.scrollX;
    y = event.clientY + window.scrollY;
    var coor = "X: " + x + ", Y: " + y;


}

function black() {
    ctx.strokeStyle = '#000000';
    gumaobject = false;
}

function blue() {
    ctx.strokeStyle = ' #3498db';
    gumaobject = false;
}

function red() {
    ctx.strokeStyle = '#c0392b';
    gumaobject = false;
}

function clean() {
    console.log("cleaning...")
    ctx.clearRect(0, 0, c.width, c.height);
}

function plus() {
    ctx.lineWidth = ctx.lineWidth + 1;
    document.getElementById("brush").innerHTML = "Brush size: " + ctx.lineWidth;
}

function minus() {
    ctx.lineWidth = ctx.lineWidth - 1;
    if (ctx.lineWidth = ctx.lineWidth - 1 < 1) {
        ctx.lineWidth = 1;
    }
    document.getElementById("brush").innerHTML = "Brush size: " + ctx.lineWidth;

}

function plusplus() {
    ctx.lineWidth = ctx.lineWidth + 5;
    document.getElementById("brush").innerHTML = "Brush size: " + ctx.lineWidth;
}

function minusminus() {
    ctx.lineWidth = ctx.lineWidth - 5;
    if (ctx.lineWidth = ctx.lineWidth - 1 < 1) {
        ctx.lineWidth = 1
    }
    document.getElementById("brush").innerHTML = "Brush size: " + ctx.lineWidth;

}

function exportovat() {
    var img = c.toDataURL('image/png');
    var download = document.createElement('a');
    download.href = img;
    download.download = "whiteboard.png";
    download.click();

}

function guma() {
    gumaobject = true;
}


c.addEventListener("touchstart", function(e) {
    mousePos = getTouchPos(c, e);
    var touch = e.touches[0];
    var mouseEvent = new MouseEvent("mousedown", {
        clientX: touch.clientX,
        clientY: touch.clientY
    });
    c.dispatchEvent(mouseEvent);
}, false);

document.body.addEventListener("touchstart", function(e) {
    if (e.target == c) {
        e.preventDefault();
    }
}, false);

function penDown(event) {

    if (event.buttons !== 1) return;

    if (gumaobject == true) {
        console.log(ctx.lineWidth);
        showCoords(event);
        ctx.clearRect(x - (ctx.lineWidth / 2), y - (ctx.lineWidth / 2), ctx.lineWidth, ctx.lineWidth);
        console.log("guma");
    } else {
        ctx.beginPath();
        ctx.lineCap = 'round';
        ctx.moveTo(x, y);
        showCoords(event);
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}