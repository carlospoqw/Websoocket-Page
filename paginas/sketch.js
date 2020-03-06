var song;
var slider;

function preload() {
    song = loadSound("song.mp3");
    createCanvas(1, 700);
}

function setup() {
    // put setup code here

    song.play();
    slider = createSlider(0, 1, 0.0, 0.01);

}

function draw() {
    // put drawing code here
    background(153);
    line(0, 0, width, height);
    song.setVolume(slider.value());
    $("#defaultCanvas0").appendTo("#one");

}