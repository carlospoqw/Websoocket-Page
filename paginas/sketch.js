var song;
var sliderVolume;
var sliderSpeed;
var canvas;
var canvasWidth = 500;
var canvasHeight = 500;
var canvasX = 20;
var canvasY = 50;
var buttonPlayStop;
var divGame = document.getElementById("one");

function preload() {
    song = loadSound("song.mp3");
}

function setup() {
    // put setup code here
    song.play();
    canvas = createCanvas(canvasWidth, canvasHeight);
    background(153);
    canvas.position(canvasX, canvasY);
    buttonPlayStop = createButton("PAUSE");
    sliderVolume = createSlider(0, 1, 0.01, 0.001);
    sliderSpeed = createSlider(1, 2, 1, 0.01);
    buttonPlayStop.position(canvasX, canvasY + canvasHeight);
    sliderVolume.position(canvasX, 20);
    sliderSpeed.position(canvasX, 5);
    buttonPlayStop.style('width', canvasWidth + 'px');
    sliderVolume.style('width', canvasWidth + 'px');
    sliderSpeed.style('width', canvasWidth + 'px');
    buttonPlayStop.mousePressed(playStop);
}

function draw() {
    // put drawing code here
    song.setVolume(sliderVolume.value());
    song.rate(sliderSpeed.value());

}


function playStop() {
    if (song.isPlaying()) {
        song.pause();
        buttonPlayStop.html('PLAY');
    } else {
        song.play();
        buttonPlayStop.html('PAUSE');
    }
}