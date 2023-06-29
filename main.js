function setup()
{
    canvas = createCanvas(400, 400);
    canvas.position(825,300);
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.hide();
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/RCPCIw5Fm/model.json",modelLoaded);
}


function modelLoaded()
{
    console.log('Model Loaded...');
}

function draw() 
{
    image(video, 0, 0, 400, 400);
    classifier.classify(video, gotResults);
}

function take_snap()
{
    save('myFilterImage.png');
}


function gotResults(error, results)
{
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("robin").innerHTML = results[0].label;
        document.getElementById("cyborg_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}