let mobilenet;
let video;
let label = ""
let toClear;


function modelReady(){
   console.log("model is Ready!")
   mobilenet.predict(gotResults)
}

function gotResults(error, results){
   if(error) {
      console.error(error)
   }else{
      console.log(results)
      label = results[0].label;
      mobilenet.predict(gotResults)
      toClear.clear()
   }

}

// function imageReady() {
//    image(puffin, 0, 0, width, height);
// }

function  setup () {
   createCanvas(640, 550);
   video = createCapture(VIDEO)
   video.hide()
   background(0);
   mobilenet = ml5.imageClassifier('MobileNet', video, modelReady)
}

function draw(){
image(video, 0, 0)
fill(0);
textSize(32)
toClear = text(label, 10, height - 20)
}




