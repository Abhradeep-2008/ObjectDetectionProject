img = "";
status = "";
objects = "";



function preload(){
img = loadImage("Bottles.jpg");
}

function setup(){

    canvas = createCanvas(550, 400);
    canvas.center()

    ObjectDetection = ml5.objectDetector("cocossd", modelLoaded);

    document.getElementById("status").innerHTML = "Status: identifying object(s)";
}

function draw(){
image(img, 0, 0, 550, 400);

if(status != ""){
   
    document.getElementById('status').innerHTML = "Object(s) Identified!!";

    for(i = 0; i < objects.length; i++){

        fill("#FF0000");
        confidence = floor(objects[i].confidence * 100);
        text(objects[i].label +" "+ confidence + "%", objects[i].x + 15, objects[i].y + 15);
        noFill();
        stroke("#FF0000");
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
    }
    
}

        
}

function modelLoaded(){
    console.log("cocossd moedl is initialized!!");

    status = 'true'

    ObjectDetection.detect(img, gotResults);
}

function gotResults(error, results){

    if(error){
        console.log(error);
    }
    else{

        console.log(results);
        objects = results

                
    }

}