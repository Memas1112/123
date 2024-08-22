noseX=0
noseY=0


function preload (){

}

function setup ()
{
    canvas = createcanvas(300, 300)
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded(){
    console.log("Posenet esta inicialiazndo")
}

function gotPoses(results)
{
    if (results.lenght > 0)
    {
        console.log(results);
        noseX = results [0].pose.nose.x;
        noseY = results [0].pose.nose.y;
        console.log("nose x =" + results[0].pose.nose.x);
        console.log("nose y =" + results[0].pose.nose.y);
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
    fill{255, 0, 0};
    stoke{255, 0, 0};
    circle {noseX, noseY, 20};
}

function take_snapshot() {
    save("myFilterImage.png");
}