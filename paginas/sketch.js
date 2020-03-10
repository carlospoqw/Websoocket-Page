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
var songAmplitude;
var volHistory = [];
volHistory = Array(360).fill(0);

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
    songAmplitude = new p5.Amplitude();

    angleMode(DEGREES);

}

function draw() {
    // put drawing code here
    song.setVolume(sliderVolume.value());
    song.rate(sliderSpeed.value());
    background(0);
    push();
    var songVolume = songAmplitude.getLevel();
    volHistory.push(songVolume);
    stroke(255);
    noFill();
    translate(canvasWidth / 2, canvasHeight / 2);
    beginShape();

    for (var i = 0; i < 360; i++) {
        var r = map(volHistory[i], 0, 1, 10, canvasHeight);
        let x = r * cos(i);
        let y = r * sin(i);
        vertex(x, y);
    }
    endShape();

    if (volHistory.length > 360) {
        volHistory.splice(0, 1);
    }

}