function setup(){
video=createCapture(VIDEO)
video.size(500,500)
canvas=createCanvas(500,500)
canvas.position(550,150)
posnet=ml5.poseNet(video,modelloaded)
posnet.on('pose',getposes)
}
function getposes(result){
    if (result.length>0) {
        console.log(result)
    }
}

function modelloaded(){
    console.log("poseNet is started")
}
function draw(){
background('#F487B6')
}